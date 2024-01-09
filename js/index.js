$(document).ready(()=>{
    
    window.scrollTo(0,0)

   $('#menu-show').click(()=>{
        $('#navlist').css({
            'left': '0%'
        })

        $('#body').css({
            'overflow': 'hidden'
        })
   })
   $('#menu-hidden').click(()=>{
        $('#navlist').css({
            'left': '100%'
        })
        $('#body').css({
            'overflow': 'auto'
        })
   })

   $('.link').each((index, li)=>{
        $(li).click(()=>{
            $('#navlist').css({
                'left': '100%'
            })
            $('#body').css({
                'overflow': 'auto'
            })
        })
   })

   $(document).scroll(()=>{
        const homeHeight = document.getElementById('home').offsetHeight;
        const top = window.scrollY

        if(top + 60 > homeHeight){

        }else{
        }

        $('.sec').each((index, sec)=>{
            const posY = sec.offsetTop - 60;
            const secHeight = sec.offsetHeight
            const secId = sec.id

            if(top >= posY && top <= posY + secHeight){
                $('.link').each((index, li)=>{
                    $(li).removeClass('link-active')
                })

                document.querySelector('header nav ul li a[href*= '+ secId +']').classList.add('link-active')
            }
        })

   })

   /* efeito de texto sendo escrito home */
   const text = document.getElementById('text');
   let msg = 'Belchior Sapalo';

   let i = 0;
   function escrever(){
        if(i < msg.length){
            text.innerHTML += msg.charAt(i);
            i++

            const a = setTimeout(escrever, 90)
        }else{
            setTimeout(()=>{
                text.innerHTML = '';
                i = 0

                if(msg == 'Belchior Sapalo'){
                    msg = 'Desenvolvedor Web';
                    if(i < msg.length){
                        text.innerHTML += msg.charAt(i);
                        i++
    
                        const b = setTimeout(escrever, 90)
                    }
                }else if(msg == 'Desenvolvedor Web'){
                    msg = 'Designer Gráfico';
                    if(i < msg.length){
                        text.innerHTML += msg.charAt(i);
                        i++
    
                        const b = setTimeout(escrever, 90)
                    }
                }else{
                    msg = 'Belchior Sapalo';
                    if(i < msg.length){
                        text.innerHTML += msg.charAt(i);
                        i++
    
                        const b = setTimeout(escrever, 90)
                    }
                }
             
            }, 2000)
        }
   }

  escrever()


  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
        0:{
            items: 1
        },
        700:{
            items:2
        },
        1000:{
            items: 3
        }
    }
})
})