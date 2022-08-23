import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    
)



/*
    ***** REACT HOOKS *****
    
    Hooklar, function componentlarının state(durum) ve diğer React özelliklerine erişmesine izin verir. Bu nedenle class componentlarına artık ihtiyaç duyulmaz.
    
    Hook Nedir? Hooklar state(durum) ve lifecycle(yaşam döngüsü) methodları(yöntemleri) gibi React özelliklerine 'Bağlanmamıza' izin verir.

    Hookları kullanabilmemiz için, import etmemiz gerekir. Örneğin useState hooku için; import { useState } from 'react'; gibi...
*/


/*
    **** HOOK RULES (HOOK KURALLARI) ****

    Hooklar için 3 kural vardır:
    1-) Hooklar yalnızca React Function Componentlar içinde çağrılabilir.
    2-) Hooklar yalnızca bir Componentin en üst düzeyinde(kısmında) çağrılabilir.
    3-) Hooklar koşullu olamaz.

    Not: Hooklar, React Class Componentlarda çalışmaz...


    *** CUSTOM HOOKS(Özel/Kendi Oluşturduğumuz Hooklar) ***

    Birkaç componentda yeniden kullanılması gereken state(durum) bilgisi olan bir mantığımız varsa, kendi özel Hooklarımızı(Custom Hooks) oluşturabiliriz.

*/



/*
    ***** useState *****

    Burada uygulama state'ini(durumunu) takip etmek için, useState Hook'unu kullanıyoruz.

    State genellikle, izlenmesi gereken uygulama verilerini veya özelliklerini ifade eder.

    ************ useState UYGULAMA 1 ************

    import React, { useState } from 'react';
    import ReactDOM from 'react-dom/client';

    const FavoriteColor = () => {
        const [color, setColor] = useState("red");

        return (
            <>
                <h1>My favorite color is {color}!</h1>
                <button style={{marginRight:"5px", color:"blue"}} type='button' onClick={() =>  setColor("blue")}>Blue</button>
                <button style={{marginRight:"5px", color:"red"}} type='button' onClick={() =>  setColor("red")}>Red</button> 
                <button style={{marginRight:"5px", color:"pink"}} type='button' onClick={() =>  setColor("pink")}>Pink</button>
                <button style={{color:"green"}} type='button' onClick={() => setColor("green")}>Green</button>
            </>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <FavoriteColor />
    )

*/



