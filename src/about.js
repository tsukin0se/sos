
function createabout(){
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const h1content = document.createTextNode("dugeon meshi food");
    const h1content2 = document.createTextNode("ダンジョン飯。　それは、“食う”か“食われる”か―――レッドドラゴンから妹・ファリンを救い出した冒険者のライオス。突如として、迷宮の主である“狂乱の魔術師”に襲われる。再会を祝したのも束の間、ダンジョン深奥で再び妹は姿を消した……。禁忌を犯してまで妹を蘇生した一行は糾弾され、さらに仲間も失う寸前の危機的な状況の中、ライオスは決意する。「“狂乱の魔術師”を打ち倒し、絶対にファリンを助け出す！」コカトリス、ハーピー、そしてグリフィン！襲い来る魔物たちを食べながらダンジョン踏破を目指せ、冒険者よ！");
    h2.className = 'h2c';

    h1.appendChild(h1content);
    h2.appendChild(h1content2);

    const currenth1 = document.getElementById("content");
    currenth1.appendChild(h1);
    currenth1.appendChild(h2);
}

export {createabout};