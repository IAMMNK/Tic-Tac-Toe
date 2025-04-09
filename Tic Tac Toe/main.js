let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let a = 0,tick=0;
let ul = document.querySelector("#ul");
let u = document.querySelector("#u");
let ur = document.querySelector("#ur");
let ml = document.querySelector("#ml");
let m = document.querySelector("#m");
let mr = document.querySelector("#mr");
let bl = document.querySelector("#bl");
let b = document.querySelector("#b");
let br = document.querySelector("#br");
let reset = document.querySelector("#reset");
let result = document.querySelector("#result");
let q = [0,0,0,0,0,0,0,0,0]
ul.addEventListener("click", () => {
    if (a == 0 && q[0]==0) {
        arr[0] = 1;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                ul.style.backgroundImage = "url(O.png)";
                ul.style.backgroundSize = "cover";
                a++;
                q[0] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
            for(let i=0;i<9;i++)
                q[i] = 1;
        }
        else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
        {
            ul.style.backgroundImage = "url(O.png)";
            ul.style.backgroundSize = "cover";
            a++;
            q[0] = 1;
            result.style.backgroundImage = "url(Xwins.png)";
            result.style.backgroundSize = "cover";
            tick++;
            for(let i=0;i<9;i++)
                q[i] = 1;
        }
        else{
            ul.style.backgroundImage = "url(O.png)";
            ul.style.backgroundSize = "cover";
            a++;
            q[0] = 1;
        }
    }
    else if (a == 1 && q[0]==0) {
        arr[0] = 2;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                ul.style.backgroundImage = "url(X.png)";
                ul.style.backgroundSize = "cover";
                a--;
                q[0] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                ul.style.backgroundImage = "url(X.png)";
                ul.style.backgroundSize = "cover";
                a--;
                q[0] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                ul.style.backgroundImage = "url(X.png)";
                ul.style.backgroundSize = "cover";
                a--;
                q[0] = 1;
            }
    }
    let check=0;
    for(let i=0;i<9;i++)
    {
        if(q[i] == 0)
            check++;
    }
    if(check == 0)
    {
        
        if(a == 0 && q[0] == 0)
        {
            ul.style.backgroundImage = "url(O.png)";
            a++;
            q[0] = 1;
        }
        else if(a==1 && q[0] ==0)
        {
            ul.style.backgroundImage = "url(X.png)";
            a--;
            q[0] = 1;
        }
        if(tick==0)
            {
            result.style.backgroundImage = "url(draw.png)";
        result.style.backgroundSize = "cover";
        }
        
    }
}
)
u.addEventListener("click", () => {
    if (a == 0 && q[1]==0) {
        arr[1] = 1;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                u.style.backgroundImage = "url(O.png)";
                u.style.backgroundSize = "cover";
                a++;
                q[1] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                u.style.backgroundImage = "url(O.png)";
                u.style.backgroundSize = "cover";
                a++;
                q[1] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else{
                u.style.backgroundImage = "url(O.png)";
                u.style.backgroundSize = "cover";
                a++;
                q[1] = 1;
            }
    }
    else if (a == 1 && q[1]==0) {
        arr[1] = 2;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                u.style.backgroundImage = "url(X.png)";
                u.style.backgroundSize = "cover";
                a--;
                q[1] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                u.style.backgroundImage = "url(X.png)";
                u.style.backgroundSize = "cover";
                a--;
                q[1] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                u.style.backgroundImage = "url(X.png)";
                u.style.backgroundSize = "cover";
                a--;
                q[1] = 1;
            }
    }
    let check=0;
    for(let i=0;i<9;i++)
    {
        if(q[i] == 0)
            check++;
    }
    if(check == 0)
    {
        
        if(a == 0 && q[1] == 0)
        {
            u.style.backgroundImage = "url(O.png)";
            a++;
            q[1] = 1;
        }
        else if(a==1 && q[1] ==0)
        {
            u.style.backgroundImage = "url(X.png)";
            a--;
            q[1] = 1;
        }
        if(tick==0)
            {
            result.style.backgroundImage = "url(draw.png)";
        result.style.backgroundSize = "cover";
        }
    }
}
)
ur.addEventListener("click", () => {
    if (a == 0 && q[2]==0) {
        arr[2] = 1;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                ur.style.backgroundImage = "url(O.png)";
                ur.style.backgroundSize = "cover";
                a++;
                q[2] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                ur.style.backgroundImage = "url(O.png)";
                ur.style.backgroundSize = "cover";
                a++;
                q[2] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                ur.style.backgroundImage = "url(O.png)";
                ur.style.backgroundSize = "cover";
                a++;
                q[2] = 1;
            }
    }
    else if (a == 1 && q[2]==0) {
        arr[2] = 2;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                ur.style.backgroundImage = "url(X.png)";
                ur.style.backgroundSize = "cover";
                a--;
                q[2] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                ur.style.backgroundImage = "url(X.png)";
                ur.style.backgroundSize = "cover";
                a--;
                q[2] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                ur.style.backgroundImage = "url(X.png)";
                ur.style.backgroundSize = "cover";
                a--;
                q[2] = 1;
            }
    }
    let check=0;
    for(let i=0;i<9;i++)
    {
        if(q[i] == 0)
            check++;
    }
    if(check == 0)
    {
        
        if(a == 0 && q[2] == 0)
        {
            ur.style.backgroundImage = "url(O.png)";
            a++;
            q[2] = 1;
        }
        else if(a==1 && q[2] ==0)
        {
            ur.style.backgroundImage = "url(X.png)";
            a--;
            q[2] = 1;
        }
        if(tick==0)
            {
            result.style.backgroundImage = "url(draw.png)";
        result.style.backgroundSize = "cover";
        }
    }
}
)
ml.addEventListener("click", () => {
    if (a == 0 && q[3]==0) {
        arr[3] = 1;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                ml.style.backgroundImage = "url(O.png)";
                ml.style.backgroundSize = "cover";
                a++;
                q[3] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                ml.style.backgroundImage = "url(O.png)";
                ml.style.backgroundSize = "cover";
                a++;
                q[3] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                ml.style.backgroundImage = "url(O.png)";
                ml.style.backgroundSize = "cover";
                a++;
                q[3] = 1;
            }
    }
    else if (a == 1 && q[3]==0) {
        arr[3] = 2;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                ml.style.backgroundImage = "url(X.png)";
                ml.style.backgroundSize = "cover";
                a--;
                q[3] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                ml.style.backgroundImage = "url(X.png)";
                ml.style.backgroundSize = "cover";
                a--;
                q[3] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                ml.style.backgroundImage = "url(X.png)";
                ml.style.backgroundSize = "cover";
                a--;
                q[3] = 1;
            }
    }
    let check=0;
    for(let i=0;i<9;i++)
    {
        if(q[i] == 0)
            check++;
    }
    if(check == 0)
    {
        
        if(a == 0 && q[3] == 0)
        {
            ml.style.backgroundImage = "url(O.png)";
            a++;
            q[3] = 1;
        }
        else if(a==1 && q[3] ==0)
        {
            ml.style.backgroundImage = "url(X.png)";
            a--;
            q[3] = 1;
        }
        if(tick==0)
            {
            result.style.backgroundImage = "url(draw.png)";
        result.style.backgroundSize = "cover";
        }
    }
}
)
m.addEventListener("click", () => {
    if (a == 0 && q[4]==0) {
        arr[4] = 1;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                m.style.backgroundImage = "url(O.png)";
                m.style.backgroundSize = "cover";
                a++;
                q[4] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                m.style.backgroundImage = "url(O.png)";
                m.style.backgroundSize = "cover";
                a++;
                q[4] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                m.style.backgroundImage = "url(O.png)";
                m.style.backgroundSize = "cover";
                a++;
                q[4] = 1;
            }
    }
    else if (a == 1 && q[4]==0) {
        arr[4] = 2;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                m.style.backgroundImage = "url(X.png)";
                m.style.backgroundSize = "cover";
                a--;
                q[4] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                m.style.backgroundImage = "url(X.png)";
                m.style.backgroundSize = "cover";
                a--;
                q[4] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                m.style.backgroundImage = "url(X.png)";
                m.style.backgroundSize = "cover";
                a--;
                q[4] = 1;
            }
    }
    let check=0;
    for(let i=0;i<9;i++)
    {
        if(q[i] == 0)
            check++;
    }
    if(check == 0)
    {
        
        if(a == 0 && q[4] == 0)
        {
            m.style.backgroundImage = "url(O.png)";
            a++;
            q[4] = 1;
        }
        else if(a==1 && q[4] ==0)
        {
            m.style.backgroundImage = "url(X.png)";
            a--;
            q[4] = 1;
        }
        if(tick==0)
            {
            result.style.backgroundImage = "url(draw.png)";
        result.style.backgroundSize = "cover";
        }
    }
}
)
mr.addEventListener("click", () => {
    
    if (a == 0 && q[5]==0) {
        arr[5] = 1;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                mr.style.backgroundImage = "url(O.png)";
                mr.style.backgroundSize = "cover";
                a++;
                q[5] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                mr.style.backgroundImage = "url(O.png)";
                mr.style.backgroundSize = "cover";
                a++;
                q[5] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                mr.style.backgroundImage = "url(O.png)";
                mr.style.backgroundSize = "cover";
                a++;
                q[5] = 1;
            }
    }
    else if (a == 1 && q[5]==0) {
        arr[5] = 2;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                mr.style.backgroundImage = "url(X.png)";
                mr.style.backgroundSize = "cover";
                a--;
                q[5] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                mr.style.backgroundImage = "url(X.png)";
                mr.style.backgroundSize = "cover";
                a--;
                q[5] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                mr.style.backgroundImage = "url(X.png)";
                mr.style.backgroundSize = "cover";
                a--;
                q[5] = 1;
            }
    }
    let check=0;
    for(let i=0;i<9;i++)
    {
        if(q[i] == 0)
            check++;
    }
    if(check == 0)
    {
        
        if(a == 0 && q[5] == 0)
        {
            mr.style.backgroundImage = "url(O.png)";
            a++;
            q[5] = 1;
        }
        else if(a==1 && q[5] ==0)
        {
            mr.style.backgroundImage = "url(X.png)";
            a--;
            q[5] = 1;
        }
        if(tick==0)
            {
            result.style.backgroundImage = "url(draw.png)";
        result.style.backgroundSize = "cover";
        }
    }
}
)
bl.addEventListener("click", () => {
    if (a == 0 && q[6]==0) {
        arr[6] = 1;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                bl.style.backgroundImage = "url(O.png)";
                bl.style.backgroundSize = "cover";
                a++;
                q[6] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                bl.style.backgroundImage = "url(O.png)";
                bl.style.backgroundSize = "cover";
                a++;
                q[6] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                bl.style.backgroundImage = "url(O.png)";
                bl.style.backgroundSize = "cover";
                a++;
                q[6] = 1;
            }
    }
    else if (a == 1 && q[6]==0) {
        arr[6] = 2;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                bl.style.backgroundImage = "url(X.png)";
                bl.style.backgroundSize = "cover";
                a--;
                q[6] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                bl.style.backgroundImage = "url(X.png)";
                bl.style.backgroundSize = "cover";
                a--;
                q[6] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                bl.style.backgroundImage = "url(X.png)";
                bl.style.backgroundSize = "cover";
                a--;
                q[6] = 1;
            }
    }
    let check=0;
    for(let i=0;i<9;i++)
    {
        if(q[i] == 0)
            check++;
    }
    if(check == 0)
    {
        
        if(a == 0 && q[6] == 0)
        {
            bl.style.backgroundImage = "url(O.png)";
            a++;
            q[6] = 1;
        }
        else if(a==1 && q[6] ==0)
        {
            bl.style.backgroundImage = "url(X.png)";
            a--;
            q[6] = 1;
        }
        if(tick==0)
            {
            result.style.backgroundImage = "url(draw.png)";
        result.style.backgroundSize = "cover";
        }
    }
}
)
b.addEventListener("click", () => {
    if (a == 0 && q[7]==0) {
        arr[7] = 1;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                b.style.backgroundImage = "url(O.png)";
                b.style.backgroundSize = "cover";
                a++;
                q[7] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                b.style.backgroundImage = "url(O.png)";
                b.style.backgroundSize = "cover";
                a++;
                q[7] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                b.style.backgroundImage = "url(O.png)";
                b.style.backgroundSize = "cover";
                a++;
                q[7] = 1;
            }
    }
    else if (a == 1 && q[7]==0) {
        arr[7] = 2;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                b.style.backgroundImage = "url(X.png)";
                b.style.backgroundSize = "cover";
                a--;
                q[7] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                b.style.backgroundImage = "url(X.png)";
                b.style.backgroundSize = "cover";
                a--;
                q[7] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                b.style.backgroundImage = "url(X.png)";
                b.style.backgroundSize = "cover";
                a--;
                q[7] = 1;
            }
    }
    let check=0;
    for(let i=0;i<9;i++)
    {
        if(q[i] == 0)
            check++;
    }
    if(check == 0)
    {
        
        if(a == 0 && q[0] == 0)
        {
            b.style.backgroundImage = "url(O.png)";
            a++;
            q[0] = 1;
        }
        else if(a==1 && q[0] ==0)
        {
            b.style.backgroundImage = "url(X.png)";
            a--;
            q[0] = 1;
        }
        if(tick==0)
            {
            result.style.backgroundImage = "url(draw.png)";
        result.style.backgroundSize = "cover";
        }
    }
}
)
br.addEventListener("click", () => {
    if (a == 0 && q[8]==0) {
        arr[8] = 1;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                br.style.backgroundImage = "url(O.png)";
                br.style.backgroundSize = "cover";
                a++;
                q[8] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                br.style.backgroundImage = "url(O.png)";
                br.style.backgroundSize = "cover";
                a++;
                q[8] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                br.style.backgroundImage = "url(O.png)";
                br.style.backgroundSize = "cover";
                a++;
                q[8] = 1;
            }
    }
    else if (a == 1 && q[8]==0) {
        arr[8] = 2;
        if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[3] == 1 && arr[4] == 1 && arr[5] ==  1 || arr[6] == 1 && arr[7] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[3] == 1 && arr[6] ==  1 || arr[1] == 1 && arr[4] == 1 && arr[7] ==  1 || arr[2] == 1 && arr[5] == 1 && arr[8] ==  1 || arr[0] == 1 && arr[4] == 1 && arr[8] ==  1 || arr[2] == 1 && arr[4] == 1 && arr[6] ==  1)
            {
                br.style.backgroundImage = "url(X.png)";
                br.style.backgroundSize = "cover";
                a--;
                q[8] = 1;
                result.style.backgroundImage = "url(Owins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else if(arr[0] == 2 && arr[1] == 2 && arr[2] == 2 || arr[3] == 2 && arr[4] == 2 && arr[5] ==  2 || arr[6] == 2 && arr[7] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[3] == 2 && arr[6] ==  2 || arr[1] == 2 && arr[4] == 2 && arr[7] ==  2 || arr[2] == 2 && arr[5] == 2 && arr[8] ==  2 || arr[0] == 2 && arr[4] == 2 && arr[8] ==  2 || arr[2] == 2 && arr[4] == 2 && arr[6] ==  2)
            {
                br.style.backgroundImage = "url(X.png)";
                br.style.backgroundSize = "cover";
                a--;
                q[8] = 1;
                result.style.backgroundImage = "url(Xwins.png)";
                result.style.backgroundSize = "cover";
                tick++;
                for(let i=0;i<9;i++)
                    q[i] = 1;
            }
            else
            {
                br.style.backgroundImage = "url(X.png)";
                br.style.backgroundSize = "cover";
                a--;
                q[8] = 1;
            }
    }
    let check=0;
    for(let i=0;i<9;i++)
    {
        if(q[i] == 0)
            check++;
    }
    if(check == 0)
    {
        
        if(a == 0 && q[0] == 0)
        {
            br.style.backgroundImage = "url(O.png)";
            a++;
            q[0] = 1;
        }
        else if(a==1 && q[0] ==0)
        {
            br.style.backgroundImage = "url(X.png)";
            a--;
            q[0] = 1;
        }
        if(tick==0)
            {
            result.style.backgroundImage = "url(draw.png)";
        result.style.backgroundSize = "cover";
        }
    }
}
)
reset.addEventListener("click",() =>
{
    for(let i=0;i<9;i++)
    {
        q[i] = 0;
        arr[i] = 0;
    }
    ul.style.backgroundImage = "";
    u.style.backgroundImage = "";
    ur.style.backgroundImage = "";
    ml.style.backgroundImage = "";
    m.style.backgroundImage = "";
    mr.style.backgroundImage = "";
    bl.style.backgroundImage = "";
    b.style.backgroundImage = "";
    br.style.backgroundImage = "";
    result.style.backgroundImage = "";
    a=0,tick=0;
}
)