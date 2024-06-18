
const showMenu = () => {
    const menu = document.querySelector('div.menu-hamb img.menu')
    const close = document.querySelector('div.menu-hamb nav img.close')

    const openMenu = () => {
        const nav = document.querySelector('div.menu-hamb nav');
        nav.style.display = 'block'

    }

    const closeMenu = () => {
        const nav = document.querySelector('div.menu-hamb nav');
        nav.style.display = 'none'
    }

    

    menu.addEventListener('click', openMenu);

    close.addEventListener('click', closeMenu)

}

showMenu();

const showPhotos = () => {
    const next = document.querySelector('img.next');
    const back = document.querySelector('img.back');
    let num = 1;
    
    const nextPhoto = (num) => {
        const img = document.querySelector('img.img-corte');
        img.src = `src/assets/images/image-product-${num}.jpg`;
    }

    const backPhoto = (num) => {
        const img = document.querySelector('img.img-corte');
        img.src = `src/assets/images/image-product-${num}.jpg`;
    }

    next.addEventListener('click', () => {
       if(num < 4) {
          num += 1;
          nextPhoto(num)
       }
        
    });

    back.addEventListener('click', () => {
        if(num && num > 1) {
            num -= 1;
            backPhoto(num);
        }
    });
}

showPhotos()

const  productQuant = () => {
    const mais = document.querySelector('div.mais');
    const menos = document.querySelector('div.menos');
    let nuns = 0;
    
    const addNuns = (nuns) => {
        const span = document.querySelector('div.quanti span');
        span.innerHTML = nuns
    }

    const drawNumbers = (nuns) => {
        const span = document.querySelector('div.quanti span');
        span.innerHTML = nuns
    }

    mais.addEventListener('click', () => {
        nuns += 1
        addNuns(nuns)
    })

    menos.addEventListener('click', () => {
        if(nuns >= 1) {
            nuns -= 1
            drawNumbers(nuns)
        }
        
    })
}

productQuant();

const shoppingCart = () => {
    const cart   = document.querySelector('div.imgs2 img.cart');
    const btnAdd = document.querySelector('button.btn-cart');
    
    const addProduct = () => {
        const qntdProduct = Number(document.querySelector('div.bnts-cont div.quanti span').innerText);

        const container = document.querySelector('div.imgs2 img.cart');
        const content = `<div class="qnt-produto">${qntdProduct}</div>`;

        if(qntdProduct === 0) {
            return
        } else {
           container.insertAdjacentHTML('beforebegin', content);
        }
    }

    const openCart = () => {
        const divQntPro = document.querySelector('div.qnt-produto');
        if(divQntPro === null) {
            const container = document.querySelector('main div.cantainer-imgs');
             const content = 
                `
                    <div class="info-cart">
                        <h1>Cart</h1>

                        <div class="hr"></div>
                        
                        <div class="crat-vazio">
                            <p>Your cart is empty.</p>
                        </div>

                    </div>
                
                `
            container.insertAdjacentHTML('afterend', content);
        }

        const qntdProduct = Number(document.querySelector('div.bnts-cont div.quanti span').innerText);
        const priceTotal = qntdProduct * 125;

        const container = document.querySelector('main div.cantainer-imgs');
        const content = 
        `
            <div class="info-cart">
                <h1>Cart</h1>

                <div class="hr"></div>

                <div class="cart-cont">
                    <div class="products">
                        <img class="product" src="src/assets/images/image-product-1-thumbnail.jpg" alt="">

                        <p>Fall Limited Edition Sneakers $125.00 x ${qntdProduct} <span>$${priceTotal}</span></p>

                        <img class="delete" src="src/assets/images/icon-delete.svg" alt="">
                    </div>
                    <button class="btn-cart">Checkout</button>
                </div>
            </div>
        
        `
        container.insertAdjacentHTML('afterend', content);

        const del = document.querySelector('div.info-cart div.products img.delete')

        del.addEventListener('click', () => {
            const container = document.querySelector('div.info-cart div.hr');
            const content = `
                <div class="crat-vazio">
                    <p>Your cart is empty.</p>
                </div>
            `
            const myDiv =  document.querySelector('div.info-cart div.cart-cont');
            const divQntd = document.querySelector('div.qnt-produto');
            divQntd.remove()
            myDiv.remove()

            container.insertAdjacentHTML('afterend', content);
        });

        document.addEventListener('mousedown', (el) => {
            const cartEl = document.querySelector('div.info-cart')
            if(cartEl && !cartEl.contains(el.target)) {
                cartEl.remove()
                
            }

        })

    }

    btnAdd.addEventListener('click', addProduct);

    cart.addEventListener('click', (el) => {

        openCart()    
    });
}

shoppingCart();

const galeriaPhoto = () => {
    const imgs = document.querySelectorAll('div.img-des img');
    console.log(imgs)

    const phots = (el) => {
        
        const container = document.querySelector('div.cantainer-imgs');

        const content = 
        `
           <div class="container-imgs">
            <img class="btn-close" src="src/assets/images/icon-close.svg" alt="">

            <div class="img-principal">
                <img class="img-corte img-prin" src="src/assets/images/image-product-1.jpg" alt="">
            </div>

            <div class="imgs-des">
                <img src="src/assets/images/image-product-1-thumbnail.jpg" alt="">
                <img src="src/assets/images/image-product-2-thumbnail.jpg" alt="">
                <img src="src/assets/images/image-product-3-thumbnail.jpg" alt="">
                <img src="src/assets/images/image-product-4-thumbnail.jpg" alt="">
            </div>
            <div>
                <div class="bnt-bn back-bn">
                    <img class="back" src="src/assets/images/icon-previous.svg" alt="">
                </div>

                <div class="bnt-bn next-bn">
                    <img class="next" src="src/assets/images/icon-next.svg" alt="">
                </div>
            </div>
        </div>
        `
        container.insertAdjacentHTML('afterend', content);

        const next = document.querySelector('div.next-bn');
        const back = document.querySelector('div.back-bn');
        const btnClose = document.querySelector('img.btn-close')
        let num = 1;
        

        const photNext = (num) => {
            const img = document.querySelector('img.img-prin');
            img.src = `src/assets/images/image-product-${num}.jpg`;
        }

        const photoBack = (num) => {
            const img = document.querySelector('img.img-prin');
            img.src = `src/assets/images/image-product-${num}.jpg`;
        }

        next.addEventListener('click', () => {
            if(num < 4) {
                num += 1;
                photNext(num)
             }
        })

        back.addEventListener('click', () => {
            if(num && num > 1) {
                num -= 1;
                photoBack(num);
            }
        });

        btnClose.addEventListener('click', () => {
            const myDivCont = document.querySelector('div.container-imgs');
            myDivCont.remove()
        })
    }

    imgs.forEach((el) => {
        el.addEventListener('click', () => {
            phots(el)
        })
    })
    
}

galeriaPhoto()








