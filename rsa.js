function euclides(a,b){
    const A = a
    let r = a%b
    let q = Math.floor(a/b)

    while(r>1){

        a = b
        b = r
        r = a%b
        q = Math.floor(a/b)

    }
    return A-q
    
}

function callE(N){
/*
    const L = [3,5,17,257,65537, 4294967297, 18446744073709551617]

     i = 0

     while(i==0 || L[i]>=N){
        i = Math.floor(Math.random() * L.length)
     }
*/
     return(3)
 
}

function crip(n, p, m){
    var result = 1;
    while(p--) {
        result = (result * n) % m;
    }

    return result;
}

function getPrimo(){

    const S = Math.floor(Math.random() * 10000)

    let R = Math.sqrt(S,2)

    let N = 0
/*    
    while(R%2 != 0){
        N++



    }
*/

    let P = Math.floor()

}


class Prime{
    constructor(){
        this.P = 1223 
        this.Q = 101
        this.N = this.P*this.Q
        this.f_N = (this.P-1)*(this.Q-1)
        this.E = 3
        
        this.s = 6

        

        this.euclides = (a,b)=>{      
                const A = a
                let r = a%b
                let q = Math.floor(a/b)
                while(r>1){            
                    a = b
                    b = r
                    r = a%b
                    q = Math.floor(a/b)            
                }
                return A-q
        }

        
        this.crip = (n, p, m)=>{
            var result = 1;
            while(p--) {
                result = (result * n) % m;
            }
            return result;
        }

        this.getKeys = ()=>{
            const PM = [2,3,5,7,11,13,17,19,23,29,
                        31,37,41,43,47,53,59,61,67,71,
                        73,79,83,89,97,101,103,107,109,113,
                        127,131,137,139,149,151,157,163,167,173,
                        179,181,191,193,197,199,211,223,227,229,
                        233,239,241,251,257,263,269,271,277,281,
                        283,293,307,311,313,317,331,337,347,349,
                        353,359,367,373,379,383,389,397,401,409,
                        419,421,431,433,439,443,449,457,461,463,
                        467,479,487,491,499,503,509,521,523,541,
                        547,557,563,569,571,577,587,593,599,601,
                        607,613,617,619,631,641,643,647,653,659,
                        661,673,677,683,691,701,709,719,727,733,
                        739,743,751,757,761,769,773,787,797,809,
                        811,821,823,827,829,839,853,857,859,863,
                        877,881,883,887,907,911,919,929,937,941,
                        947,953,967,971,977,983,991,997,1009,1013,
                        1019,1021,1031,1033,1039,1049,1051,1061,1063,1069,
                        1087,1091,1093,1097,1103,1109,1117,1123,1129,1151,
                        1153,1163,1171,1181,1187,1193,1201,1213,1217,1223]

            this.P = Math.floor(Math.random() * 50)
            this.Q = Math.floor(Math.random() * 26)
            this.N = this.P*this.Q
            this.f_N = (this.P-1)*(this.Q-1)
            this.D = this.euclides(this.f_N,this.E)

        }

        this.encrip = (M)=>{
            let txt = '' 
            for(let i=0; i<M.length; i++){
                const ch = this.crip(M.charCodeAt(i),this.E,this.N).toString().padStart(this.s,0)
                console.log(ch)
                txt += ch
                console.log(M.charCodeAt(i) )
            }
            return txt
        }

        this.decrip = (M)=>{
            let txt = ''
            for(let i=0; i<M.length/this.s; i++){
                const ascii =  this.crip(parseInt(M.substr(i*this.s,this.s)),this.D,this.N)
                txt += String.fromCharCode(ascii)
                console.log(ascii )
            }
            return txt
        }

        this.showKeys = ()=>{
            console.log(this.P)
            console.log(this.Q)
        }

        this.D = this.euclides(this.f_N,this.E)
        this.getKeys()

    }


}