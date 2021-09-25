let hasTipList = Array.from(document.querySelectorAll(".has-tooltip")),
    tip, 
    tipList = document.getElementsByClassName('tooltip'),
    itemCoords, currentY, currentX, currentItem, currentTip,
    dataList =['top', 'right', 'bottom', 'left'];

    hasTipList.forEach((item, index) => {
        tip = document.createElement("div");
        tip.classList.add("tooltip");
        tip.innerText = item.getAttribute('title')
        item.insertAdjacentElement('afterEnd', tip)
        currentItem = index
        if(currentItem < dataList.length){
            tip.setAttribute('data-position', dataList[index])
        } else {
            currentItem = 0;
        }
        tip.setAttribute('data-position', dataList[currentItem])

        item.addEventListener('click', function(e) {
            e.preventDefault();
            if(!tipList[index].classList.contains('tooltip_active')){
                for(let i = 0; i<tipList.length; i +=1){
                    tipList[i].classList.remove('tooltip_active');
                }
                tipList[index].classList.add('tooltip_active');
                itemCoords= item.getBoundingClientRect();
                currentTip = window.getComputedStyle(tipList[index], null);
                
                currentTip = currentTip.width;

                currentTip = currentTip.split('');
                currentTip.splice(-2,2);
                currentTip = currentTip.join('');

                console.log(typeof currentTip, currentTip)


                switch(tipList[index].getAttribute('data-position')) {
                    case 'bottom': currentY = itemCoords.y + itemCoords.height;
                    currentX = itemCoords.x; break;
                    case 'top': currentY = itemCoords.y - itemCoords.height - 10; 
                    currentX = itemCoords.x; break;
                    case 'right': currentX = itemCoords.x + itemCoords.width; 
                    currentY = itemCoords.y; break;
                    case 'left': currentX = itemCoords.x - currentTip - 10;
                    currentY = itemCoords.y; break;
                    default: currentY = itemCoords.y + itemCoords.height;
                }

                tipList[index].style.top = currentY + 'px';
                tipList[index].style.left = currentX + 'px';


            } else {
                tipList[index].classList.remove('tooltip_active');

            }
            


        })

    })
