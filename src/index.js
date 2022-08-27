import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const CleanEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000);

        return () => clearTimeout(timer);

    }, []);

    return <h1> İşlemimiz Çalışıyor {count} </h1>
};


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <CleanEffect />
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




/*      ***** React useState Hook *****        */

/*

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



/*
    React useState Hook bir Function Componentdaki state'i(durumu) izlememizi sağlar.

    State(Durum) genellikle bir uygulamada izlenmesi gereken verileri(data) veya özellikleri(properties) ifade eder.

    import { useState } from "react"; şeklinde import edilir.

    *** Initialize useState ***
    useState Function Componentimizi çağırarak state'imizi başlatıyoruz.
    useState bir başlangıç state'ini kabul eder ve iki değer döndürür:

    1-) Şu anki state(durum)
    2-) Durumu update eden(güncelleyen) bir function.

    const FavoriteColor = () => {
        const [color, setColor] = useState("");
    }

    Burada, ilk değer olan color, mevcut durumumuzdur.
    İkinci değer olan setColor, state'imizi(durumumuzu) güncellemek için kullanılan fonksiyondur.

    Not: Bu isimler, istediğimiz herhangi bir şey olarak adlandırılabilen değişkenlerdir.

    Son olarak, ilk durumu boş bir stringe ayarladık: useState("")

*/



/*
    ************ useState UYGULAMA 2 ************

    import { useState } from 'react';
    import ReactDOM from 'react-dom/client';

    const FavoriteColor = () => {
        const[color, setColor] = useState("red"); 

        return <h1>My favorite color is {color}!</h1>
    }

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <FavoriteColor />
    )


    // Not: State'i asla doğrudan güncellememeliyiz. Örn: color = "red" izin verilmez.
    // Not: State'imizi güncellemek için state güncelleyici fonksiyonumuzu kullanıyoruz.

    // useState Hooku; stringleri, sayıları, booleanları, dizileri, nesneleri ve bunların herhangi bir kombinasyonunu takip etmek için kullanılabilir!

*/



/*
    ************ useState UYGULAMA 3 ************

    import { useState } from 'react';
    import ReactDOM from 'react-dom/client';

    const FavoriteColor = () => {
        const[color, setColor] = useState("red"); 

        return (
            <>
                <h1>My favorite color is {color}!</h1>
                <button type='button' onClick={() => setColor("blue")}>Blue</button>
            </>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <FavoriteColor />
    )

*/



/*
    ************ useState UYGULAMA 4 ************

    import { useState } from 'react';
    import ReactDOM from 'react-dom/client';

    const Car = () => {
        const [brand, setBrand] = useState("Ford");
        const [model, setModel] = useState("Mustang");
        const [year, setYear] = useState("1964");
        const [color, setColor] = useState("red");

        return (
            <>
                <h1>My {brand} </h1>
                <p>
                    It is a {color} {model} from {year}.
                </p>
            </>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <Car />
    )

*/



/*
    ************ useState UYGULAMA 5 ************

    import { useState } from 'react';
    import ReactDOM from 'react-dom/client';

    const Car = () => {
        const [car, setCar] = useState({
            brand: "Ford",
            model: "Mustang",
            year: 1964,
            color: "red"
        });

        return (
            <>
                <h1>My {car.brand} </h1>
                <p>
                    It is a {car.color} {car.model} from {car.year}.
                </p>
            </>
        )
        
    }

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <Car />
    )

*/



/*
    ************ useState UYGULAMA 6 ************

    import { useState } from 'react';
    import ReactDOM from 'react-dom/client';

    const Car = () => {
        const [car, setCar] = useState({
            brand: "Ford",
            model: "Mustang",
            year: 1964,
            color: "red"
        });

        const updateColor = () => {
            setCar( (yeniState) => {
                return {...yeniState, year: 2000, brand: "Mercedes"}
            })
        };

        // Halihazırdaki state(durum) değerine ihtiyacımız olduğu için, fonksiyonumuza bir fonksiyon geçiriyoruz (setCar ın içinde olan fonksiyon). Bu fonksiyon önceki değeri/değerleri alır.

        return (
            <>
                <h1>My {car.brand} </h1>
                <p>
                    It is a {car.color} {car.model} from {car.year}.
                </p>
                <button type='button' onClick={updateColor}>Degistir</button>
            </>
        )
        
    }

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <Car />
    )

*/





/*      ***** React useEffect Hooks *****        */

/*
    --> useEffect Hook'u componentlarımızda side effects(yan etkiler) gerçekleştirmemize olanak tanır.

    --> Bazı side effects(yan etki) örnekleri şunlardır: Veri alma/işleme(Fetching data), doğrudan DOM'i güncelleme ve zamanlayıcılar(timers).

    --> useEffect 2 arguman kabul eder. İkinci arguman opsiyonel, yani isteğe bağlıdır.

    --> useEffect(<function>, <dependency>)
*/

/*
    ************ useEffect UYGULAMA 1 ************

    import { useState, useEffect } from 'react';
    import ReactDOM from 'react-dom/client';

    const Timer = () => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            setTimeout(() => {
                setCount((count) => count + 1)
            }, 1000);
        });

        return <h1>I've rendered {count} times!</h1>
    };

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <Timer />
    )

    --> Burada!! Sadece bir kez sayması gerektiği halde saymaya devam ediyor!

    --> useEffect her render üzerinde çalışır. Bu, sayı değiştiğinde, daha sonra başka bir efekti tetikleyen bir oluşturma gerçekleştiği anlamına gelir.

    --> İstediğimiz bu değil. Yan etkilerin(side effects) ne zaman çalıştığını kontrol etmenin birkaç yolu vardır.

    --> Her zaman bir diziyi(Array'i) kabul eden ikinci parametreyi dahil etmeliyiz. Bu dizide isteğe bağlı olarak useEffect'e bağımlılıkları aktarabiliriz.
*/



/*
    1-) No dependency passed: // Bağımlılık geçmedi:
    useEffect(() => {
        // Runs on every render --> Her render(işleme) edildiğinde çalışır
    });

    2-) An empty array: // Boş bir dizi
    useEffect(() => {
        // Runs only on the first render --> Yalnızca ilk renderda(işlemede) çalışır.
    }, []);

    3-) Props or state values: // Props veya durum değerleri
    useEffect(() => {
        // Runs on the first render -->  
        // And any time any dependency value changes
        // Bu yapıda: Hem ilk renderda hem de herhangi bir bağımlılık(dependency) değeri değiştiğinde çalışır.
    }, [prop, state]);
*/



/*
    ************ useEffect UYGULAMA 2 ************

    import { useState, useEffect } from 'react';
    import ReactDOM from 'react-dom/client';

    const Timer = () => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            setTimeout(() => {
                setCount((count) => count + 1)
            }, 1000);
        }, []); // Efekti yalnızca ilk oluşturmada render ettik.

        return <h1>I've rendered {count} times!</h1>
    };

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <Timer />
    )
*/



/*
    ************ useEffect UYGULAMA 3 ************

    --> İşte bir değişkene bağlı olan useEffect Hook örneği. Count değişkeni güncellenirse efekt tekrar çalışır:

    import { useState, useEffect } from 'react';
    import ReactDOM from 'react-dom/client';

    const Counter = () => {
        const [count, setCount] = useState(0);
        const [calculation, setCalculation] = useState(0);

        useEffect(() => {
            setCalculation(() => count * 2)
        }, [count]);

        return (
            <>
                <p>Count: {count}</p>
                <button onClick={() => setCount((c) => c + 1)}>+</button>
                <p>Calculation {calculation}</p>
            </>
        )

    };

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <Counter />
    )

    Not: Birden çok bağımlılık varsa, bunlar useEffect bağımlılık dizisine(dependency array) dahil edilmelidir.
*/



/*
    ************ useEffect UYGULAMA 4 ************

    // Effect Cleanup: Efect Temizleme

    --> Bazı efektler, bellek sızıntılarını azaltmak için temizleme gerektirir.

    --> Artık gerekmeyen zaman aşımları, abonelikler, olay dinleyicileri ve diğer efektler atılmalıdır.
    
    --> Bunu useEffectHook'un sonuna bir dönüş fonksiyonu ekleyerek yapıyoruz.

    import { useState, useEffect } from 'react';
    import ReactDOM from 'react-dom/client';


    const Timer = () =>  {
        const [count, setCount] = useState(0);

        useEffect(() => {

            let timer = setTimeout(() => {
                setCount((count) => count + 1)
            }, 1000); // Not: Zamanlayıcıyı temizlemek için ona bir isim vermemiz gerekiyordu.

            return () => clearTimeout(timer);

        }, [])

        return <h1>I've rendered {count} times!</h1>
    }


    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <Timer />
    )
*/
