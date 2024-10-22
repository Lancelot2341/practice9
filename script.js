document.addEventListener("DOMContentLoaded", function() {
  const paragraph = document.getElementById("text");
  let textContent = paragraph.innerHTML;

  // 1. Highlight all words over 8 characters long
  textContent = textContent.split(' ').map(word => {
    if (word.length > 8) {
      return `<span style="background-color: yellow">${word}</span>`;
    }
    return word;
  }).join(' ');
  
  paragraph.innerHTML = textContent;

  // 2. Add a link back to the source of the text after the paragraph
  const sourceLink = document.createElement('a');
  sourceLink.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
  sourceLink.innerText = 'Source of the text';
  document.body.appendChild(sourceLink);

  // 3. Split each new sentence onto a new line
  textContent = paragraph.innerHTML;
  textContent = textContent.replace(/([.!?])\s*(?=[A-Z])/g, "$1<br><br>");
  paragraph.innerHTML = textContent;

  // 4. Count the number of words in the paragraph and display the count after the heading
  const wordCount = paragraph.innerText.split(/\s+/).filter(word => word.length > 0).length;
  const wordCountDiv = document.getElementById('word-count');
  wordCountDiv.innerText = `Word count: ${wordCount}`;

  // 5. Replace all question marks with thinking faces and exclamation marks with astonished faces
  textContent = paragraph.innerHTML;
  textContent = textContent.replace(/\?/g, '🤔').replace(/!/g, '😲');
  paragraph.innerHTML = textContent;
});
