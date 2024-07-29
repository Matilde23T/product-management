//classe prodotto
var Prodotto = /** @class */ (function () {
    function Prodotto(tipo, id, taglia, colore, stato) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
        this.ordine = 'non ordinato';
    }
    Prodotto.prototype.assegnaCliente = function (cliente) {
        if (this.stato === 'disponibile') {
            //stato del ordine del cliente
            this.ordine = 'ordinato';
            console.log("Prodotto ".concat(this.tipo, " (ID: ").concat(this.id, ") assegnato a ").concat(cliente.nome, " ").concat(cliente.cognome));
        }
        else {
            console.log("Prodotto ".concat(this.tipo, " (ID: ").concat(this.id, ") non \u00E8 disponibile per l'assegnazione."));
        }
    };
    Prodotto.prototype.getOrdine = function () {
        return this.ordine;
    };
    return Prodotto;
}());
// Classe cliente
var Cliente = /** @class */ (function () {
    function Cliente(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    Cliente.prototype.ordinaProdotto = function (prodotto) {
        if (prodotto.stato === 'disponibile') {
            prodotto.assegnaCliente(this);
            console.log("Il prodotto ".concat(prodotto.tipo, " (ID: ").concat(prodotto.id, ") \u00E8 stato ordinato da ").concat(this.nome, " ").concat(this.cognome, " indirizzo email:").concat(this.email, ", pagamento con:").concat(this.metodoPagamento));
        }
        else {
            console.log("Il prodotto ".concat(prodotto.tipo, " (ID: ").concat(prodotto.id, ") non \u00E8 disponibile."));
        }
    };
    return Cliente;
}());
//Classe processo produzione
var processoProduzione = /** @class */ (function () {
    function processoProduzione(NomeProcesso, descrizione) {
        this.NomeProcesso = NomeProcesso;
        this.descrizione = descrizione;
        this.prodottiProduzione = [];
    }
    processoProduzione.prototype.aggiungiProdotto = function (prodotto) {
        this.prodottiProduzione.push(prodotto);
        console.log("Prodotto aggiunto al processo ".concat(this.NomeProcesso, ": ").concat(prodotto.tipo, " (ID: ").concat(prodotto.id, ")"));
    };
    return processoProduzione;
}());
//instanziare oggetti prodotto
var prodotto1 = new Prodotto('costume da bagno', 23, 'M', 'blu', 'disponibile');
var prodotto2 = new Prodotto('pareo', 123, 'L', 'giallo', 'disponibile');
var prodotto3 = new Prodotto('cappello', 80, 'S', 'rosso', 'disponibile');
//instaziare oggetti clienti
var cliente1 = new Cliente('Marta', 'Rossini', 'marta.rossini@example.com', 'carta di credito');
var cliente2 = new Cliente('Mario', 'Rossi', 'mario.rossi@example.com', 'pagamento con contrassegno');
var cliente3 = new Cliente('Maria', 'Bianchi', 'maria.bianchi@example.com', 'paypal');
cliente1.ordinaProdotto(prodotto1);
cliente2.ordinaProdotto(prodotto2);
cliente3.ordinaProdotto(prodotto3);
console.log(prodotto1);
console.log(prodotto2);
console.log(prodotto3);
//instanziare processi di produzione
var processoprod1 = new processoProduzione('innovaProd', 'processo di innovazione del prodotto');
var processoprod2 = new processoProduzione('manuProd', 'processo di manuntenzione del prodotto');
var processoprod3 = new processoProduzione('optimizeProd', 'processo di ottimizzazione del prodotto');
//instanziare oggetti per i processi di produzione
var prodotto5 = new Prodotto('cappello', 88, 'S', 'grigio', 'disponibile');
var prodotto6 = new Prodotto('costume da bagno', 15, 'L', 'verde', 'disponibile');
processoprod1.aggiungiProdotto(prodotto5);
processoprod2.aggiungiProdotto(prodotto6);
processoprod3.aggiungiProdotto(prodotto5);
console.log(prodotto5);
console.log(prodotto6);
