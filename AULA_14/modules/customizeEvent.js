export default function GetUrl (url) {
    return new CustomEvent ("onstatechange",{ 
        detail: { 
            url: url } }
)}