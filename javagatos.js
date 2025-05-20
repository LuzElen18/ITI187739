// Inicializar Google Charts
google.charts.load('current', {'packages':['corechart']});

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar el quiz y ocultar resultados inicialmente
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    
    // Asignar event listeners
    document.getElementById('submit').addEventListener('click', evaluateQuiz);
    document.getElementById('generatePdf').addEventListener('click', generatePDF);
});
// Datos para el gráfico
let userScores = [0, 0, 0, 0, 0];
let maxScores = [1, 1, 1, 1, 1];

function evaluateQuiz() {
    // Calcular puntuación
    let score = 0;
    const answers = {
        q1: '1', q2: '1', q3: '1', q4: '1', q5: '1'
    };
    
    // Verificar respuestas
    for (let i = 1; i <= 5; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            userScores[i-1] = parseInt(selectedOption.value);
            score += parseInt(selectedOption.value);
        }
    }
    
    // Mostrar resultados
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').textContent = `Tu puntuación: ${score}/5`;
    
    // Mostrar retroalimentación
    let feedback = '';
    if (score === 5) {
        feedback = '¡Excelente! Eres un verdadero experto en gatitos negros.';
    } else if (score >= 3) {
        feedback = 'Buen trabajo, pero aún hay cosas que aprender sobre estos fascinantes felinos.';
    } else {
        feedback = 'Parece que necesitas aprender más sobre los gatitos negros. ¡Es un tema fascinante!';
    }
    document.getElementById('feedback').textContent = feedback;
    
    // Mostrar dato curioso
    const catFacts = [
        "Los gatos negros pueden 'oxidarse' y volverse marrones si pasan mucho tiempo al sol.",
        "En la marina británica se creía que un gato negro a bordo traía buena suerte.",
        "El gen que hace a los gatos negros también los hace más resistentes a algunas enfermedades.",
        "Los gatos negros son los últimos en ser adoptados en los refugios debido a supersticiones.",
        "Algunas culturas creen que los gatos negros pueden predecir el clima."
    ];
    document.getElementById('catFact').textContent = 
        `Dato curioso: ${catFacts[Math.floor(Math.random() * catFacts.length)]}`;
    
    // Dibujar gráfico
    drawChart();
}

function drawChart() {
    google.charts.setOnLoadCallback(function() {
        var data = google.visualization.arrayToDataTable([
            ['Pregunta', 'Tu puntuación', 'Puntuación máxima'],
            ['Pregunta 1', userScores[0], maxScores[0]],
            ['Pregunta 2', userScores[1], maxScores[1]],
            ['Pregunta 3', userScores[2], maxScores[2]],
            ['Pregunta 4', userScores[3], maxScores[3]],
            ['Pregunta 5', userScores[4], maxScores[4]]
        ]);
        
        var options = {
            title: 'Desempeño por pregunta',
            vAxis: {title: 'Puntuación'},
            hAxis: {title: 'Preguntas'},
            seriesType: 'bars',
            series: {1: {type: 'line'}},
            colors: ['#333', '#d9534f']
        };
        
        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    });
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Título
    doc.setFontSize(20);
    doc.text('Resultados del Diagnóstico sobre Gatitos Negros', 105, 20, {align: 'center'});
    
    // Puntuación
    doc.setFontSize(16);
    const scoreText = document.getElementById('score').textContent;
    doc.text(scoreText, 105, 40, {align: 'center'});
    
    // Feedback
    doc.setFontSize(12);
    const feedback = document.getElementById('feedback').textContent;
    doc.text(feedback, 105, 50, {align: 'center'});
    
    // Dato curioso
    const catFact = document.getElementById('catFact').textContent;
    doc.text(catFact, 20, 60, {maxWidth: 170});
    
    // Gráfico (como imagen)
    const chartElement = document.getElementById('chart_div');
    const chartCanvas = chartElement.getElementsByTagName('canvas')[0];
    
    if (chartCanvas) {
        const chartImage = chartCanvas.toDataURL('image/png');
        doc.addImage(chartImage, 'PNG', 20, 80, 170, 100);
    }
    
    // Pie de página
    doc.setFontSize(10);
    doc.text('© 2023 Diagnóstico Gatitos Negros - Todos los derechos reservados', 105, 200, {align: 'center'});
    
    // Guardar PDF
    doc.save('diagnostico_gatitos_negros.pdf');
}