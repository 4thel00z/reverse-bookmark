const css = `
.nH[role=list]{
    display: flex;
    flex-flow: column;
    flex-direction: column-reverse;
}

.nH[role=listitem] .Bk .G3.G2{
    border-top: none;
}

.nH .kv.bg[role=listitem]:nth-child(2) .Bk .G3.G2{
    border-bottom: 1px solid rgba(100, 121, 143, 0.122);
}

.nH .kv.bg[role=listitem]:nth-last-child(2) .Bk .G3.G2{
    border-top: 1px solid rgba(100, 121, 143, 0.122);
}

.nH div[role=listitem]:nth-last-child(2) .Bk .G3.G2{
    border-top: 1px solid rgba(100, 121, 143, 0.122);
}`;


const style = document.createElement('style');
style.innerHTML = css;
const ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);
