	const tamanhoCelula = 44;
let pecaId = 0;
document.body.append(criaTabuleiro());

function criaTabuleiro() {
    const tamanho = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td');
			celula.setAttribute("id",`i${i}j${j}`)
			//celula.innerHTML = `i${i}j${j}`
            linha.append(celula);
            celula.style.width = `${tamanhoCelula}px`;
            celula.style.height = `${tamanhoCelula}px`;
            //celula.textContent = `i${i}j${j}`
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = '#e67d57';
                celula.setAttribute('class',"container")
                if (i * 8 + j <= 24) {
                    celula.append(criaPeca('black',i,j));
                } else if (i * 8 + j >= 40) {
                    celula.append(criaPeca('red',i,j));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
    return tabela;
}
resettab = document.createElement('button')
resettab.textContent = "Resetar Tabuleiro"
resettab.addEventListener('click', () => {window.location.href = window.location.href;})
document.body.append(resettab)

function criaPeca(color,i,j) {
    let png = document.createElement('img');
    if (color=="black") {
        png.setAttribute('src', "preto.png");
        png.setAttribute('time','preto')
    }
    if (color=="red") {
        png.setAttribute('src', "vermelho.png");
        png.setAttribute('time','vermelho')
    }
    png.setAttribute('width', `${tamanhoCelula-8}px`);
    png.setAttribute('height', `${tamanhoCelula-8}px`);
    png.setAttribute('class','draggable')
    png.setAttribute('name',`i${i}j${j}`)
    return png;

}


        const draggableList = document.querySelectorAll('.draggable')
        const containerList = document.querySelectorAll('.container')

        draggableList.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                draggable.classList.add('dragging')
            })
            draggable.addEventListener('dragend' , () => {
                draggable.classList.remove('dragging')
            })
            
            containerList.forEach(container => {
                container.addEventListener('dragover', evento => {
                    const draggable = document.querySelector('.dragging')
                    evento.preventDefault()
                    draggable.addEventListener('dragend', () => {
                        var distanciaY = Math.abs(parseInt(container.id[1]) - parseInt(draggable.name[1]))
                        var distanciaX = Math.abs(parseInt(container.id[3]) - parseInt(draggable.name[3]))
                        if (container.childElementCount == 0){
                            if (distanciaX < 1.1 && distanciaY < 1.1){
                            if (0==0){
							container.appendChild(draggable)
                            draggable.setAttribute('name',`i${parseInt(container.id[1])}j${parseInt(container.id[3])}`)
                    }}}
                    var cont = container.firstElementChild
                    if (container.childElementCount == 1 && cont.getAttribute('time') != draggable.getAttribute('time')) {
                        if (draggable.name[1] < cont.name[1] && draggable.name[3] < cont.name[3] && document.querySelector(`#i${parseInt(draggable.name[1])+2}j${parseInt(draggable.name[3])+2}`).childElementCount == 0) {
                            container.appendChild(draggable)
                            cont.remove()
                            newcontainer = document.querySelector(`#i${parseInt(draggable.name[1])+2}j${parseInt(draggable.name[3])+2}`)
                            newcontainer.appendChild(draggable)
                                                        
                        }
                        if (draggable.name[1] > cont.name[1] && draggable.name[3] > cont.name[3] && document.querySelector(`#i${parseInt(draggable.name[1])-2}j${parseInt(draggable.name[3])-2}`).childElementCount == 0) {
                            container.appendChild(draggable)
                            cont.remove()
                            newcontainer = document.querySelector(`#i${parseInt(draggable.name[1])-2}j${parseInt(draggable.name[3])-2}`)
                            newcontainer.appendChild(draggable)
                        }
                        if (draggable.name[1] < cont.name[1] && draggable.name[3] > cont.name[3] && document.querySelector(`#i${parseInt(draggable.name[1])+2}j${parseInt(draggable.name[3])-2}`).childElementCount == 0) {
                            container.appendChild(draggable)
                            cont.remove()
                            newcontainer = document.querySelector(`#i${parseInt(draggable.name[1])+2}j${parseInt(draggable.name[3])-2}`)
                            newcontainer.appendChild(draggable)
                        }
                        if (draggable.name[1] > cont.name[1] && draggable.name[3] < cont.name[3] && document.querySelector(`#i${parseInt(draggable.name[1])-2}j${parseInt(draggable.name[3])+2}`).childElementCount == 0) {
                            container.appendChild(draggable)
                            cont.remove()
                            newcontainer = document.querySelector(`#i${parseInt(draggable.name[1])-2}j${parseInt(draggable.name[3])+2}`)
                            newcontainer.appendChild(draggable)
                        }
                        
                    }
                    })
                })
            })
        })
        function debug (l) {
            p.textContent = l
        }