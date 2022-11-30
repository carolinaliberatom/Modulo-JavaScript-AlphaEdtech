import Principal from "./homepage.js";
import Brigadeiros from './brigadeiros.js';
import Cupcakes from './cupcakes.js';
import Doces from './doces.js';

export default function Router() {
    return {
        "/homepage": Principal, 
        "/brigadeiros": Brigadeiros,
        "/cupcakes": Cupcakes,
        "/doces": Doces,
        getPage: function(url) {
            return this[url](); // chama o valor do router.url
        }
    }
}