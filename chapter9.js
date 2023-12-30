let res = null;
function findTextContent(el, txt){
    if(el && el.textContent.trim() === txt){
       res = el
       return res
    }else{
       if(el && el.hasChildNodes()){
          [...el.children].forEach((ch) => {
             return findTextContent(ch, txt)
          })
       }
       
       return res
    }
 }

function findTargetParagraph() {
    const paragraphs = document.querySelectorAll('p');
    
    for (let i = 0; i < paragraphs.length; i++) {
        if (findTextContent(paragraphs[i], "On mouse over here bold words of the following paragraph will be highlighted")) {
            return paragraphs[i + 1];
        }
    }

    return null;
}

function highlightBoldWords(paragraph) {
    if (paragraph) {
        const allBoldNodes = paragraph.children;
        for(let j = 0; j<allBoldNodes.length; j++)
        {
            if(allBoldNodes[j].tagName === 'STRONG') {
                allBoldNodes[j].style.color = 'yellow';
            }
        }
    }
}

const links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
    if(links[i].innerText === 'On mouse over here bold words of the following paragraph will be highlighted') {
        links[i].addEventListener('mouseover', function(e){
            const targetParagraph = findTargetParagraph();
        highlightBoldWords(targetParagraph);
        });
    }
}