const select = document.querySelector('.select');
const img = document.querySelector('.img');
const button = document.querySelector('.button');
const list1 = document.querySelector('.car1');
const list2 = document.querySelector('.car2');
const list3 = document.querySelector('.car3');
const list4 = document.querySelector('.car4');
const list5 = document.querySelector('.car5');
const list6 = document.querySelector('.car6');


function showProduct() {

    switch (select.value) {

        case 'selec':
            img.setAttribute('src', 'https://virgola.com.br/assets/img_v3/imagem-comparador.png')            
            list1.textContent = ''
            list2.textContent = ''
            list3.textContent = ''
            list4.textContent = ''
            list5.textContent = ''
            list6.textContent = ''
            break
        case 'mobi':
            img.setAttribute('src', 'https://www.webmotors.com.br/imagens/prod/346680/FIAT_MOBI_1.0_EVO_FLEX_LIKE._MANUAL_34668017564139829.webp?s=fill&w=130&h=97&q=70&t=true)')
            list1.textContent = '0 a 100km/h em 16,6 segundos'
            list2.textContent = 'Motor econômico fire 1.0'
            list3.textContent = 'Retrovisor com câmera de ré'
            list4.textContent = 'Indicador de troca de machas'
            list5.textContent = 'Câmbio com inibidor de ré'
            list6.textContent = 'Central multimídia Unconnect'
            break
        case 'argo':
            img.setAttribute('src', 'https://argo.fiat.com.br/content/dam/fiat/products/358/acv/1/2023/page/hero.png')
            list1.textContent = '0 a 100km/h em 13,4 segundos'
            list2.textContent = 'Motor firefly 1.3'
            list3.textContent = 'Central multimídia 7'
            list4.textContent = 'Volante multifuncional'
            list5.textContent = "Keyless entry n'go"
            list6.textContent = 'Direção elétrica progressiva'
            break
        case 'cronos':
            img.setAttribute('src', 'https://production.autoforce.com/uploads/version/profile_image/6444/model_main_comprar-1-3_de0b517c0f.png')
            list1.textContent = '0 a 100km/h em 11,5 segundos'
            list2.textContent = 'Motor econômico fire 1.3'
            list3.textContent = 'Central multimídia 7'
            list4.textContent = 'Novo câmbio automático'
            list5.textContent = 'Ré com linhas dinâmicas'
            list6.textContent = 'Hill holder'
            break
        case 'pulse':
            img.setAttribute('src', 'https://pulse.fiat.com.br/content/dam/fiat/products/363/a1k/0/2023/page/hero.png')
            list1.textContent = '0 a 100km/h em 14 segundos'
            list2.textContent = 'Motor Turbo 200 Flex'
            list3.textContent = 'Câmbio automático CVT de ré'
            list4.textContent = 'Wireclass charger'
            list5.textContent = 'Traction control puls (TC+)'
            list6.textContent = 'Central multimídia DE 10.1'
            break
        case 'strada':
            img.setAttribute('src', 'https://strada.fiat.com.br/content/dam/fiat/products/281/a2d/0/2023/page/hero.png')
            list1.textContent = '0 a 100km/h em 13,1 segundos'
            list2.textContent = 'Suspensão do feixe de molas'
            list3.textContent = 'Melhor consumo de combustível'
            list4.textContent = 'Faróis em LED'
            list5.textContent = 'TC+ controle de tração'
            list6.textContent = 'Central multimídia'
            break
    }
}

select.addEventListener ("change", showProduct)
