import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";
// Client and Account are the classes built in Appwrite SDK to connect to the Appwrite server and manage user accounts respectively.

 export class AuthService{
    client=new Client(); // created an instance for this class 
    account;  // we will define it in constructor  reason ki jb koi user aaye aur appwrite ke is specific project se connect kre  tb hi account create ho us particular user k

    constructor(){
        // connecting the client to the appwrite server using the url and project id from conf.js
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        // ab client connect ho gya h 
        // accounts k instance creat krenge and current client obj pass kr denge 
        this.account=new Account(this.client);
    }

    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                // call login function
                return this.login({email,password});
            }else{
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try{
             return await account.createEmailPasswordSession({email,password})
        }catch(error){
            throw error;    
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

      async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;


/*😂 Haan, ye lo sirf **tumhare doubt wala concise notes**.

---

# Why export only one object?

```javascript
const authService = new AuthService();

export default authService;
```

### Doubt:

> Sirf ek object export ho raha hai, to kya sirf ek hi client access karega?

### Answer:

**Nahi.** Yahan **Client ka matlab Appwrite Client Object** hai, **User nahi**.

* `new AuthService()` se **sirf ek AuthService object** banta hai.
* Is object ke andar **ek hi Client object** aur **ek hi Account object** banta hai.
* Puri React application ke saare components isi object ko reuse karte hain.

Is pattern ko **Singleton Pattern** kehte hain.

```text
Login Component
        │
Signup Component
        ├──► authService (Same Object)
Profile Component
        │
        ▼
     Same Client
```

### Why Singleton?

Agar har component `new AuthService()` banaye:

```text
Login  → Client 1
Signup → Client 2
Profile → Client 3
```

To unnecessary multiple client objects banenge.

Isliye ek hi object banaya jata hai aur sab components use share karte hain.

---

### Important Note ⭐

**Ek AuthService object ≠ Ek User**

Har user/browser apni React application ki alag copy run karta hai.

```text
Browser 1 → authService → Client

Browser 2 → authService → Client

Browser 3 → authService → Client
```

Har browser ka apna singleton hota hai. Isliye ek user ka login doosre user ko affect nahi karta.

---

### One-line Interview Answer

> **`authService` ko singleton object ki tarah export kiya jata hai taaki poori application me ek hi Appwrite Client aur Account instance reuse ho aur unnecessary multiple instances create na hon.**
 */