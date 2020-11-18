<template>
<body>
    <div class="all">
      <nav class="menu">
    <div class="menu-container">
        <router-link to="/"><img src="../assets/logo.png" class="logo"/></router-link>
    </div>
    </nav>
    <table><tr><td class="formulaire">
    <div >
        <div class="form-head">
            <h1>Kanmu</h1>
            <p id="question1-txt">Prêt à participer à la révolution e-sport?</p>
        </div>
        <form action="" method="post">
            <div class="form-element">
                <label class="form-label" for="Mail">Adresse mail de votre compte</label> <br>
                <input class="form-input" type="email" name="Mail" id="Mail" required>
            </div>
            <div class="form-element button">
                <table>
                    <tr><td><input type="submit" value="ENVOYER" id="button-sub">
                    </td><td> 
                    <router-link to="/signup"><button id="button-link">RETOUR</button> </router-link></td></tr>
                </table>
            </div>
        </form>
    </div></td><td class="img side">
     <div>
        <img src="../assets/bg/BgSideConnexion.png" id="img">
    </div></td></tr></table>
  </div>
</body>
  
</template>

<script>
export default {

}
</script>

<style>
.all{
    background: url("../assets/bg/back.png");
    width: 100%;
    height: 100%;
}
.menu{
  z-index: 5;
  height:auto;
  width:100%;
  display:block;
  position:fixed;
  left:0;
  top:0;
  background-color: rgba(255, 255, 255, 0.65);
  text-align: left;
  padding:22px 28px;
}

.logo{
  width:60px;
  height:60px;
  left:0;
  top:0;
}
#img{
        padding-left: 20px;
        width: 80%;
        margin-top: 0px;
        height: 80%;
    }
    .side{
        padding-top: 100px;
    }
    .img{
        width: 50%;
        height: 100%;
    }
    h1{
        font-weight: bold;
        font-size: 50px;
        padding-top: 64px;
        margin-bottom: -5px;
    }
    #question1-txt{
        font-family: Helvetica;
        font-size: 15px;
        font-style: italic;
        padding-bottom: 17px;

    }
    .formulaire{
        text-align: left;
        width: 40%;
        height: 100%;
        padding-top: 100px;
        padding-left: 10%;
        margin-right: 0 ;
        color:black;
    }
    .form-element{
        padding-top : 100px;
        padding-bottom: 10px;
        font-size: 20px;
    }
    .form-input{
        font-size: 20px;
        width: 100%;
        margin-top:10px;
        color:rgba(121, 118, 118, 1);
        border-color: black;
        border-top : none;
        border-left : none;
        border-right : none;
    }
    #accord-txt{
        font-family: Helvetica;
        font-size: 15px;
        margin-top: -20px;
        /* margin-bottom: 10px; */
    }
    #accord{
        appearance: none;
        border: solid 4px #d8d8d8;
        width: 20px;
        height: 20px;
        content: "\2714";

    }
    #accord:checked{
        appearance: none;
        border: solid 4px #d8d8d8;
        width: 20px;
        height: 20px;
        background-color: rgba(232, 39, 70, 1);
        content: "\2714";
    }
    td{
        padding-left: 3px;
        text-align: center;

    }
    .button{
        text-align: center;
    }
    #button-sub{
        margin-top: 10px;
        font-size: 24px;
        color: #d8d8d8;
        background-color: rgba(232, 39, 70, 1);
        padding: 15px;
        border-top : none;
        border-left : none;
        border-right : none;
        border-bottom: none;
        border-radius: 50px;
        margin-left: 10%;
        width: 180px;
        margin-right: 10px;
    }
    #button-link{
        margin-top: 10px;
        /* margin-left: 25%; */
        font-size: 24px;
        color: rgba(232, 39, 70, 1) ;
        background-color: #d8d8d8;
        padding: 15px;
        border-top : none;
        border-left : none;
        border-right : none;
        border-bottom: none;
        border-radius: 50px;
        margin-left: 20%;
        width: 180px;
    }
    #button-link:hover{
         margin-top: 10px;
        /* margin-left: 30%; */
        font-size: 24px;
        color:#d8d8d8 ;
        background-color:rgba(232, 39, 70, 1) ;
        padding: 15px;
        border-top : none;
        border-left : none;
        border-right : none;
        border-bottom: none;
        border-radius: 50px;
        
    }
    #button-sub:hover{
        margin-top: 10px;
        /* margin-left: 25%; */
        font-size: 24px;
        color: rgba(232, 39, 70, 1) ;
        background-color:#d8d8d8 ;
        padding: 15px;
        border-top : none;
        border-left : none;
        border-right : none;
        border-bottom: none;
        border-radius: 50px;
        
    }
    #link-mdp{
        text-align: center;
        color : black;
        padding-left: 100px ;
    }
    .link{
        color: black;
        font:bold;
        font-size: 15px;
    }

</style>