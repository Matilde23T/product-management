//Interfaccia prodotto
interface IProdotto {
    tipo: 'costume da bagno' | 'pareo' | 'cappello';
    id: number;
    taglia: string;
    colore: string;
    stato: 'disponibile' | 'esaurito';
    assegnaCliente(cliente: ICliente): void;
}

//Interfaccia cliente
interface ICliente {
nome: string;
cognome: string;
email: string;
metodoPagamento: string;
ordinaProdotto(prodotto: IProdotto): void;
}

//Interfaccia processo di produzione
interface IProcessoProduzione {
NomeProcesso: string;
descrizione:string;
prodottiProduzione:(IProdotto[]);
aggiungiProdotto(prodotto: IProdotto): void
}

//classe prodotto
class Prodotto implements IProdotto {
    tipo: 'costume da bagno' | 'pareo' | 'cappello';
    id: number;
    taglia: string;
    colore: string;
    stato: 'disponibile' | 'esaurito';
    private ordine: 'ordinato' | 'non ordinato'; 

    constructor(tipo: 'costume da bagno' | 'pareo' | 'cappello', id: number, taglia: string, colore: string, stato: 'disponibile' | 'esaurito') {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
        this.ordine = 'non ordinato';  
    }

    assegnaCliente(cliente: ICliente): void {
        if (this.stato === 'disponibile') {
            //stato del ordine del cliente
            this.ordine = 'ordinato'; 
           console.log(`Prodotto ${this.tipo} (ID: ${this.id}) assegnato a ${cliente.nome} ${cliente.cognome}`);
        } else {
            console.log(`Prodotto ${this.tipo} (ID: ${this.id}) non è disponibile per l'assegnazione.`);
        }
    }

    getOrdine(): 'ordinato' | 'non ordinato' {
        return this.ordine;
    }
}

// Classe cliente
class Cliente implements ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;

    constructor(nome: string, cognome: string, email: string, metodoPagamento: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }

    ordinaProdotto(prodotto: IProdotto): void {
        if (prodotto.stato === 'disponibile') {
            prodotto.assegnaCliente(this);
            console.log(`Il prodotto ${prodotto.tipo} (ID: ${prodotto.id}) è stato ordinato da ${this.nome} ${this.cognome} indirizzo email:${this.email}, pagamento con:${this.metodoPagamento}`);
        } else {
            console.log(`Il prodotto ${prodotto.tipo} (ID: ${prodotto.id}) non è disponibile.`);
        }
    }
}

//Classe processo produzione
class processoProduzione implements IProcessoProduzione{
    NomeProcesso: string;
    descrizione:string;
    prodottiProduzione: IProdotto[];

    constructor(NomeProcesso: string, descrizione: string) {
        this.NomeProcesso = NomeProcesso;
        this.descrizione = descrizione;
        this.prodottiProduzione = [];
    }

    aggiungiProdotto(prodotto: IProdotto): void {
        this.prodottiProduzione.push(prodotto);
        console.log(`Prodotto aggiunto al processo ${this.NomeProcesso}: ${prodotto.tipo} (ID: ${prodotto.id})`);
    }
}

//instanziare oggetti prodotto
const prodotto1 = new Prodotto ('costume da bagno', 23 , 'M', 'blu', 'disponibile');
const prodotto2 = new Prodotto ('pareo' , 123 , 'L', 'giallo', 'disponibile');
const prodotto3 = new Prodotto ('cappello', 80 , 'S', 'rosso', 'disponibile');


//instaziare oggetti clienti
const cliente1 = new Cliente ('Marta', 'Rossini', 'marta.rossini@example.com' ,  'carta di credito');
const cliente2 = new Cliente ('Mario', 'Rossi', 'mario.rossi@example.com', 'pagamento con contrassegno');
const cliente3 = new Cliente ('Maria', 'Bianchi', 'maria.bianchi@example.com', 'paypal');

cliente1.ordinaProdotto(prodotto1);
cliente2.ordinaProdotto(prodotto2);
cliente3.ordinaProdotto(prodotto3);

console.log(prodotto1);
console.log(prodotto2);
console.log(prodotto3);

//instanziare processi di produzione
const processoprod1 = new processoProduzione ('innovaProd', 'processo di innovazione del prodotto');
const processoprod2 = new processoProduzione ('manuProd', 'processo di manuntenzione del prodotto');
const processoprod3 = new processoProduzione ('optimizeProd', 'processo di ottimizzazione del prodotto');

//instanziare oggetti per i processi di produzione
const prodotto5 = new Prodotto('cappello', 88, 'S', 'grigio', 'disponibile');
const prodotto6 = new Prodotto('costume da bagno', 15, 'L', 'verde', 'disponibile');

processoprod1.aggiungiProdotto(prodotto5);
processoprod2.aggiungiProdotto(prodotto6);
processoprod3.aggiungiProdotto(prodotto5);

console.log(prodotto5);
console.log(prodotto6);













