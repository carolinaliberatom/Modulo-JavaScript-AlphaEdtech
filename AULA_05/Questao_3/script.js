const select = document.querySelector('.select');
const img = document.querySelector('.img');
const button = document.querySelector('.button');

function images() {

    switch (select.value) {
        case 'selecione':
            img.setAttribute('src', 'https://www.portalaguasclaras.com/wp-content/uploads/2017/07/O-Botic%C3%A1rio.png')
            break
        case 'pink':
            img.setAttribute('src', 'https://img.freepik.com/free-psd/perfume-bottle-with-box-mockup_358694-1168.jpg?w=996&t=st=1666722074~exp=1666722674~hmac=3c5db47b2f6b93cf7f23174bf9d0ebae342aff2f176d87193c69dbed50cb705d')
            break
        case 'yellow':
            img.setAttribute('src', 'https://img.freepik.com/free-photo/front-view-fragrance-bottle-transparent-white-floor_140725-11635.jpg?w=740&t=st=1666722162~exp=1666722762~hmac=0039c22ca538b39c8356b571897434954565bedae77a92101b775f9d228be308')
            break
        case 'rose':
            img.setAttribute('src', 'https://img.freepik.com/free-psd/round-perfume-bottle-mockup-front-view_1332-6467.jpg?w=740&t=st=1666722131~exp=1666722731~hmac=51bf6d9584c0991e804bcd1a9e8ee299b1099dd5868b0947a5a4f558fbfb040d')
            break
        case 'black':
            img.setAttribute('src', 'https://img.freepik.com/free-photo/front-view-black-fragrance-designed-with-gold-cap-white-floor_140725-11596.jpg?w=996&t=st=1666722196~exp=1666722796~hmac=55400437aa8546c2c9ff4a4dbc248391f8cf973fc83db9e395d9759f951ca54f')
            break
        case 'green':
            img.setAttribute('src', 'https://img.freepik.com/free-psd/squared-perfume-bottle-mockup-front-view_1332-6491.jpg?w=740&t=st=1666722183~exp=1666722783~hmac=55b1417081bd29a993413e2bce5454018a6636bd339aec670738121bc88e3e20')
            break
    }
}

button.addEventListener ("click", images)
