function foo(a,b,c){
    return a+b+c;
}

function boo(a,c){
    var d = c + 2;
    var x = foo(a,c,d);
    return x-d;
}

function goo(x){
    var y = boo(x, 3);
    return y + foo(y,y,y);
}

function moo(n, k){
    return goo(n) + too(k);
}

function too(j){
    return j * 2;
}

function zoo(z){
    return too(z);
}

function noo(a,b){
    if (boo(a,b) * 3.7 > 5887){
        return moo(4, koo(b));
    }
    return boo(a,b) + 4.66;
}

function koo(d){
    var f = zoo(d) * 5.3;
    return f * 1.2;
}

var r = goo(5);
var w = r + too(3) + zoo(r) + boo(r, too(712));
var q = foo(r, w, 4) + koo(34) + noo(w,r);



/*

How many times koo is being called? -- 1
What is the value of b in the 4th time foo is called? -- 1558
who is calling goo the first time? -- no caller/direct
zoo -- no caller/direct
what function was called the most? -- foo
Who is calling foo the first time it is being called? -- boo that is called by goo
what is the greatest value zoo sends as a parameter to too? -- 34
what is the largest value of j*2.3 when calling too? -- 1637.6
3337.52448 ???
find the biggest value that koo returns -- 432.48


goo +
boo ++++
foo ++++++
too ++++
zoo ++
koo +
noo +



*/