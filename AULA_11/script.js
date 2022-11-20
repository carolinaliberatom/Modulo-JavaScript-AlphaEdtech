const textResult = document.getElementById('textResult')
const table = document.getElementById('table')
const tbody = document.getElementById('tbody')
const prodView = document.getElementById('prodView')
const inclButton = document.getElementById('inclButton')
const listButton = document.getElementById('listButton')
const nameProd = document.getElementById('product')
const descProd = document.getElementById('description')
const valueProd = document.getElementById('value')
const searchInput = document.getElementById('search')
let i = 1
const produtos = [] // Empty array

// INPUT VALOR ONLY NUMBERS
function onlyNumbers() {
    const replacedInput = event.target.value.replace (/[^0-9]/g, "");
    valueProd.value = replacedInput
}

// ADDING PRODUCTS
function includeProd() {
    if (inclButton.innerHTML == "Incluir produto") { // editing a product
        try {
            if (nameProd.value == '' || descProd.value == '' || valueProd.value == '') throw 'Há espaços vázios'

            else {
                const today = new Date() 
                const timestamp = today.toISOString() // Setting according to RFC
                const objeto = { // Creating a new object
                    
                    "id": i,    
                    "nome": nameProd.value.toLowerCase(), 
                    "descricao": descProd.value.toLowerCase(), 
                    "valor": valueProd.value, 
                    "incluidoEm": timestamp
                }
                produtos.push(objeto) // Adding to the empty array
                i++
                textResult.innerHTML = `Produto ${objeto.nome} incluído com sucesso!`
                nameProd.value = ''
                descProd.value = ''
                valueProd.value = ''
            }
        } catch (error) {
            textResult.innerHTML = `Erro: ${error}`
        }       
    }
    
    if (inclButton.innerHTML == "Confirmar edição") { // editing a product
        let x = i - 2
        if (nameProd.value !== '') {
            produtos[x].nome =  nameProd.value
        }
        if (descProd.value !== '') {
            produtos[x].descricao =  descProd.value
        }
        if (valueProd.value !== '') {
            produtos[x].valor =  valueProd.value
        }
        createTable()
        nameProd.value = ''
        descProd.value = ''
        valueProd.value = ''
        inclButton.innerText = "Incluir produto"
        listButton.innerText = "Listar produtos"
        listButton.style.backgroundColor = "#77CC6D"
    }
}

// LIST PRODUCTS
function createTable() {
    table.style.visibility = 'visible'
    searchInput.style.visibility = 'visible'
    let x = 0
    tbody.innerHTML = "";
    produtos.forEach(produto => {
        const row = tbody.insertRow(-1)
        row.insertCell(0).innerHTML = produto.id
        row.insertCell(1).innerHTML = `<span class="make-buttons" onclick="viewProduct(event)">${produto.nome}</span>`
        row.insertCell(2).innerHTML = `$${produto.valor},00`
        row.insertCell(3).innerHTML = '<span id="editIcon" onclick="changeButtons()" class="material-symbols-outlined">edit</span>'
        row.insertCell(4).innerHTML = `<span id="deleteIcon" onclick="deleteProduct(${x})" class="material-symbols-outlined">delete</span>`
        x++
    });
}

// SAME BUTTON DIFERENTS FUNCTIONS
function listProd() {
    if (listButton.innerHTML == "Listar produtos") {
        createTable()
    }
    if (listButton.innerHTML == "Não editar") { // editing a product
        inclButton.innerText = "Incluir produto"
        listButton.innerText = "Listar produtos"
        listButton.style.backgroundColor = "#77CC6D"
    }
}

// VIEW PRODUCT DESCRIPTION 
function viewProduct(event) {
    const searchIdProd = event.path[2].cells[0].innerHTML // getting the id of the product clicked
    let indexOfProd =  searchIdProd - 1
    console.log(event)

    reDate = new Date(produtos[indexOfProd].incluidoEm)

    prodView.innerHTML = 
        `Id: ${produtos[indexOfProd].id} <br> 
        Nome: ${produtos[indexOfProd].nome} <br> 
        Descrição: ${produtos[indexOfProd].descricao} <br> 
        Valor: ${produtos[indexOfProd].valor} <br> 
        IncluidoEm: ${reDate.toLocaleDateString()} - ${reDate.toLocaleTimeString()}`
}

// CHANGE BUTTONS    
function changeButtons() {
    inclButton.innerText = "Confirmar edição"
    listButton.innerText = "Não editar"
    listButton.style.backgroundColor = 'red'
}

// DELETE ARRAY
function deleteProduct(x) {
    produtos.splice(x, 1)
    listProd()
}

// SORT PRODUCTS VALUES
function sortValues() {
    produtos.sort((a, b) => a.valor - b.valor)
    listProd()
} 

// SORT PRODUCTS NAMES
function sortNames() {
    produtos.sort((a, b) => a.nome.localeCompare(b.nome))
    listProd()
} 

// SEARCH PRODUCT
function searchTable() {
    console.log(produtos)
    tbody.innerHTML =  ''
    const filteredProdutos = produtos.filter( function (produto) {
        if (produto.nome == searchInput.value) {
            return true
        }
        if (produto.descricao == searchInput.value) {
            return true
        }
    } )
    filteredProdutos.forEach(produto => {
        let x = 0
        const row = tbody.insertRow(-1)
        row.insertCell(0).innerHTML = produto.id
        row.insertCell(1).innerHTML = `<span class="make-buttons" onclick="viewProduct(event)">${produto.nome}</span>`
        row.insertCell(2).innerHTML = `$${produto.valor},00`
        row.insertCell(3).innerHTML = '<span id="editIcon" onclick="changeButtons()" class="material-symbols-outlined">edit</span>'
        row.insertCell(4).innerHTML = `<span id="deleteIcon" onclick="deleteProduct(${x})" class="material-symbols-outlined">delete</span>`
    })
    if (filteredProdutos.length > 0) {
        textResult.innerHTML = `Foram encontrado(s) ${filteredProdutos.length}`
    }
    else {
        textResult.innerHTML = `Não foram encontrados produtos conforme chave de pesquisa!`
        listProd()
    }
    searchInput.value = ''
}
