<template>
<div>


	<SignIn v-if="!loggedIn"></SignIn>



	<div class="container" style="padding-right: 0px;padding-left: 0px;" v-if="loggedIn">
		<div class="container" style="color: #ffffff"><div>Привет {{apiDATA}}</div>   <a href="#" @click="onLogout()" >Выйти</a></div>
		<div class="kanban-board cla "  >
			
			<div class="rowstyle">
				<h3 class="header orange">On Hold ({{items0.length}})</h3>
				<Container style="min-height:10px;" :group-name="'1'" :get-child-payload="getChildPayload0" @drop="onDrop1('items0', $event)">
					<Draggable v-for="item in items0" :key="item.id">
						<div class="draggable-item">
							<div class="delete" @click="deleteItem('items0', item)"></div>
							<p><b class="id">id: </b>{{item.id}}</p>
							<p>{{item.text}}</p>
						</div>
					</Draggable>
				</Container>
				<form @submit.prevent="addItem1('items0')">
					
					<input type="text" id="title0" class="card-title-textarea" rows="5" placeholder="Ввести заголовок для этой карточки" v-model="newCardHeader1" v-bind:style="addACardStyle[0]">
					<button variant="primary"  type="submit" class="add-a-card" v-bind:style="addACardStyle[0]">Добавить карточку</button>
				</form>
					
				
				<button class="cancel" @click="hideAddACardTextarea()" v-bind:style="addACardStyle[0]"></button>
				<button class="add-another-card" @click="showAddACardTextarea(0)" v-bind:style="addAnotherCardStyle[0]">Добавить карточку</button>
			</div>
			<div class="rowstyle">
				<h3 class="header blue">In Progress ({{items1.length}})</h3>
				<Container style="min-height:10px;" :group-name="'1'" :get-child-payload="getChildPayload1" @drop="onDrop2('items1', $event)">
					<Draggable v-for="item in items1" :key="item.id">
						<div class="draggable-item">
							<div class="delete" @click="deleteItem('items1', item)"></div>
							<p><b class="id">id: </b>{{item.id}}</p>
							<p>{{item.text}}</p>
						</div>
					</Draggable>
				</Container>
				<form @submit.prevent="addItem2('items1')">
					
					<input type="text" id="title0" class="card-title-textarea" rows="5" placeholder="Ввести заголовок для этой карточки" v-model="newCardHeader2" v-bind:style="addACardStyle[1]">
					<button variant="primary"  type="submit" class="add-a-card" v-bind:style="addACardStyle[1]">Добавить карточку</button>
				</form>


				<button class="cancel" @click="hideAddACardTextarea()" v-bind:style="addACardStyle[1]"></button>
				<button class="add-another-card" @click="showAddACardTextarea(1)" v-bind:style="addAnotherCardStyle[1]">Добавить карточку</button>
			</div>
			<div class="rowstyle">
				<h3 class="header yellow">Needs Review ({{items2.length}})</h3>
				<Container style="min-height:10px;" :group-name="'1'" :get-child-payload="getChildPayload2" @drop="onDrop3('items2', $event)"> 
					<Draggable v-for="item in items2" :key="item.id">
						<div class="draggable-item">
							<div class="delete" @click="deleteItem('items2', item)"></div>
							<p><b class="id">id: </b>{{item.id}}</p>
							<p>{{item.text}}</p>
						</div>
					</Draggable>
				</Container>
				<form @submit.prevent="addItem3('items2')">
					
					<input type="text" id="title0" class="card-title-textarea" rows="5" placeholder="Ввести заголовок для этой карточки" v-model="newCardHeader3" v-bind:style="addACardStyle[2]">
					<button variant="primary"  type="submit" class="add-a-card" v-bind:style="addACardStyle[2]">Добавить карточку</button>
				</form>
				<button class="cancel" @click="hideAddACardTextarea()" v-bind:style="addACardStyle[2]"></button>
				<button class="add-another-card" @click="showAddACardTextarea(2)" v-bind:style="addAnotherCardStyle[2]">Добавить карточку</button>
			</div>
			<div class="rowstyle">
				<h3 class="header green">Approved ({{items3.length}})</h3>
				<Container style="min-height:10px;" :group-name="'1'" :get-child-payload="getChildPayload3" @drop="onDrop4('items3', $event)">
					<Draggable v-for="item in items3" :key="item.id">
						<div class="draggable-item">
							<div class="delete" @click="deleteItem('items3', item)"></div>
							<p><b class="id">id: </b>{{item.id}}</p>
							<p>{{item.text}}</p>
						</div>
					</Draggable>
				</Container>
				<form @submit.prevent="addItem4('items3')">
					
					<input type="text" id="title0" class="card-title-textarea" rows="5" placeholder="Ввести заголовок для этой карточки" v-model="newCardHeader4" v-bind:style="addACardStyle[3]">
					<button variant="primary"  type="submit" class="add-a-card" v-bind:style="addACardStyle[3]">Добавить карточку</button>
				</form>

				<button class="cancel" @click="hideAddACardTextarea()" v-bind:style="addACardStyle[3]"></button>
				<button class="add-another-card" @click="showAddACardTextarea(3)" v-bind:style="addAnotherCardStyle[3]">Добавить карточку</button>
			</div>
		</div>
	</div>
	




</div>
</template>

<script>
import SignIn from './SignIn.vue'
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag0, loadItems0, saveItems0 } from "./utils0";
import { applyDrag1, loadItems1, saveItems1 } from "./utils1";
import { applyDrag2, loadItems2, saveItems2 } from "./utils2";
import { applyDrag3, loadItems3, saveItems3 } from "./utils3";
import {mapGetters} from 'vuex'
import axios from 'axios'
export default {
	name: "Home",
	components: { Container, Draggable,SignIn },
	data: function() {
		return {
			
			items0: loadItems0('items0'),
			items1: loadItems1('items1'),
			items2: loadItems2('items2'),
			items3: loadItems3('items3'),
			newCardHeader1: '',
			newCardHeader2: '',
			newCardHeader3: '',
			newCardHeader4: '',
			username: '',
			password: '',
			apiDATA:'',
			putREQUEST1:[],
			putREQUEST2:[],
			putREQUEST3:[],
			putREQUEST4:[],
			idDROP:'',
			Drop1:2,
			Drop2:4,
			Drop3:3,
			Drop4:5,
			putID:[],
			addACardStyle: [ 
				{ display: 'none'},
				{ display: 'none'},
				{ display: 'none'},
				{ display: 'none'}
			],
			addAnotherCardStyle: [ 
				{ display: 'block'},
				{ display: 'block'},
				{ display: 'block'},
				{ display: 'block'}
			],
			userID:''
		};
	},
	created(){
		this.getConsole(),
		this.getDATA1(),
		this.getDATA2(),
		this.getDATA3(),
		this.getDATA4()
	},
	computed: { ...mapGetters(['loggedIn','nameAll'])},
	methods: {
		
		
		getDATA1(){
			axios
            .get('https://mustavf.pythonanywhere.com/api/v1/test/?genres=ONHOLD', { headers: { Authorization: 'Bearer '+ this.$store.state.accessToken } })
            .then(response=> (this.items0=response.data))
            
		},
		getDATA2(){
			axios
            .get('https://mustavf.pythonanywhere.com/v1/test/?genres=INPROGRESS', { headers: { Authorization: 'Bearer '+ this.$store.state.accessToken } })
            .then(response=> (this.items1=response.data))
		},
		getDATA3(){
			axios
            .get('https://mustavf.pythonanywhere.com/api/v1/test/?genres=NEEDSREVIEW', { headers: { Authorization: 'Bearer '+ this.$store.state.accessToken } })
            .then(response=> (this.items2=response.data))
		},
		getDATA4(){
			axios
            .get('https://mustavf.pythonanywhere.com/api/v1/test/?genres=APPROVED', { headers: { Authorization: 'Bearer '+ this.$store.state.accessToken } })
            .then(response=> (this.items3=response.data))
		},
		onDrop1: function(collection1, dropResult1) {

			this.hideAddACardTextarea();
			this[collection1] = applyDrag0(this[collection1], dropResult1);
			saveItems1(collection1, this[collection1]);	
			axios
            .put('https://mustavf.pythonanywhere.com/api/v1/test/update/'+this.idDROP,{'genres': this.Drop1})
            console.log(this.idDROP)
   
		},
		onDrop2: function(collection, dropResult) {
			this.hideAddACardTextarea();
			this[collection] = applyDrag1(this[collection], dropResult);
			saveItems1(collection, this[collection]);			
			axios
            .put('https://mustavf.pythonanywhere.com/api/v1/test/update/'+this.idDROP,{'genres': this.Drop2})
            console.log(this.idDROP)

		},
		onDrop3: function(collection, dropResult) {
			this.hideAddACardTextarea();
			this[collection] = applyDrag2(this[collection], dropResult);
			saveItems2(collection, this[collection],
			axios.put('https://mustavf.pythonanywhere.com/api/v1/test/update/'+this.idDROP,{'genres': this.Drop3}) );
			console.log('ueiowagjflirojegsopw')
		},
		onDrop4: function(collection, dropResult) {
			this.hideAddACardTextarea();
			this[collection] = applyDrag3(this[collection], dropResult);
			saveItems3(collection, this[collection],axios.put('http://127.0.0.1:8000/api/v1/test/update/'+this.idDROP,{'genres': this.Drop4}) )
		},
		getConsole(){
			axios
            .get('https://mustavf.pythonanywhere.com/api/v1/customers/', { headers: { Authorization: 'Bearer '+ this.$store.state.accessToken } })
            .then(response=> (this.apiDATA=response.data.data.[0].user.username,this.userID=response.data.data.[0].id,console.log(this.apiDATA),console.log(this.userID)))
			
		},
		getChildPayload0: function(index) {
			this.idDROP=this.items0[index].id
			console.log(this.idDROP)
			return this.items0[index];
		},
		getChildPayload1: function(index) {
			this.idDROP=this.items1[index].id
			console.log(this.idDROP)
			return this.items1[index];
		},
		getChildPayload2: function(index) {
			this.idDROP=this.items2[index].id
			console.log(this.idDROP)
			return this.items2[index];
		},
		getChildPayload3: function(index) {
			this.idDROP=this.items3[index].id
			console.log(this.idDROP)
			return this.items3[index];
		},
		addItem1: function(collection) {
			if (this.newCardHeader1) {
				this[collection].push({ header: this.newCardHeader1 });
				saveItems0(collection, this[collection]);
				this.hideAddACardTextarea();
				axios.post(`https://mustavf.pythonanywhere.com/api/v1/test/create/`,{'text':this.newCardHeader1,'genres':2,'USER':this.userID  })
				location.href='/';
			}
		},
		addItem2: function(collection) {
			if (this.newCardHeader2) {
				this[collection].push({ header: this.newCardHeader2 });
				saveItems0(collection, this[collection]);
				this.hideAddACardTextarea();
				axios.post(`https://mustavf.pythonanywhere.com/api/v1/test/create/`,{'text':this.newCardHeader2,'genres':3,'USER':this.userID  })
				location.href='/';
			}
		},
		addItem3: function(collection) {
			if (this.newCardHeader3) {
				this[collection].push({ header: this.newCardHeader3 });
				saveItems0(collection, this[collection]);
				this.hideAddACardTextarea();
				axios.post(`https://mustavf.pythonanywhere.com/api/v1/test/create/`,{'text':this.newCardHeader3,'genres':4,'USER':this.userID  })
				location.href='/';
			}
		},
		addItem4: function(collection) {
			if (this.newCardHeader4) {
				this[collection].push({ header: this.newCardHeader4 });
				saveItems0(collection, this[collection]);
				this.hideAddACardTextarea();
				axios.post(`https://mustavf.pythonanywhere.com/api/v1/test/create/`,{'text':this.newCardHeader4,'genres':5,'USER':this.userID  })
				location.href='/';
			}
		},
		deleteItem: function(collection, item) {
			let index = this[collection].map(x => {
				return x.id;
			}).indexOf(item.id);
			this[collection].splice(index, 1);
			saveItems0(collection, this[collection]);
			axios
            .delete('https://mustavf.pythonanywhere.com/api/v1/test/delete/'+item.id)
		},
		hideAddACardTextarea: function() {
			this.newCardHeader = '';
			for(let i = 0; i < this.addACardStyle.length; i++) {
				this.addACardStyle[i].display = 'none';
			}
			for(let i = 0; i < this.addAnotherCardStyle.length; i++) {
				this.addAnotherCardStyle[i].display = 'block';
			}
		},
		showAddACardTextarea: function(col) {
			this.hideAddACardTextarea();
			this.addAnotherCardStyle[col].display = 'none';
			this.addACardStyle[col].display = 'block';
			let textareaID = 'title' + col;

			setTimeout(function() {
				document.getElementById(textareaID).focus();
			}, 0);
		},
		login: function() {
		this.$store.dispatch('userLogin', {username: this.username,password: this.password}).then(() => {location.href='/';}).catch(err => {console.log(err),this.incorrectAuth = true })},
		onLogout() {this.$store.dispatch('userLogout'); return;},
		
	}
};
</script>

<style scoped>
*{
  font-family: Arial, sans-serif;
}

:focus { outline: none !important; }
:focus::-webkit-input-placeholder { color: transparent }
:focus::-moz-placeholder { color: transparent }
:focus:-moz-placeholder { color: transparent }
:focus:-ms-input-placeholder { color: transparent }

body{
  background-color: #35383f;
	padding: 0;
	margin:0;
}

.kanban-board {
  padding: 50px 0 50px 0px;
  width:  1140px;
}

.rowstyle {
  background-color: #2b2d33;
  width: 232px;
  padding-bottom: 46px;
  display:inline-block;
  vertical-align: top;
  position: relative;
}

.rowstyle:not(:last-child) {
    margin-right: 50px;
}

.header {
  color: white;
  text-shadow: 0 0 4px #4b5263;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 200;
  margin: 0;
  padding: 10px;
}

.orange {
  background-color: #fb7e46;
}

.blue {
  background-color: #2a92bf;
}

.yellow {
  background-color: #f4ce46;
}

.green {
  background-color: #00b961;
}

.draggable-item {
  background-color: #191a1d;
  margin: 10px 10px 0;
  padding: 10px;
  cursor: move;
  color: #aaaaaa;
  position: relative;
}

.draggable-item p {
  font-size: 14px;
}

.draggable-item .id {
  color: white;
}

.delete {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 15px;
  height: 15px;
  margin: 0;
  padding: 0;
  line-height: 1;
  cursor: pointer;
  opacity: 0.5;  
}

.delete:before,
.delete:after {
  background-color: white;
  position: absolute;
  top: 7px;
  right: 2px;
  content: "";
  display: block;
  width: 11px;
  height: 1px;
}

.delete:before {
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.delete:after {
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.delete:hover {
  opacity: 1;
}

.card-title-textarea {
  resize: none;
  width: 230px;
  border: none;
  margin: 10px;
  padding: 10px;
  color: #cfcfcf;
  background-color: #4f4f4f;
  border: 1px solid #4f4f4f;
}

.card-title-textarea::-webkit-input-placeholder {
color: #9f9f9f;
}

.card-title-textarea:-moz-placeholder {
color: #9f9f9f;  
}

.card-title-textarea::-moz-placeholder {
color: #9f9f9f;  
}

.card-title-textarea:-ms-input-placeholder {
color: #9f9f9f;  
}

.add-a-card {
  position: absolute;
  bottom: 15px;
  left: 10px;
  padding: 5px;
  width: 170px;
  font-size: 14px;
  color: #cfcfcf;
  background-color: #616161;
  border: 1px solid #616161;
  cursor: pointer;
}

.add-a-card:hover {
  color: #cdcdcd;
  background-color: #504f4f;
  border: 1px solid #504f4f;
}

.add-a-card:active{
  color: #cacaca;
  background-color: #454545;
  border: 1px solid #454545;
}

.cancel {
  position: relative;
  position: absolute;
  bottom: 15px;
  left: 190px;
  background-color: transparent;
  border: none;
  width: 28px;
  height: 28px;
  cursor: pointer;
  opacity: 0.5;
}

.cancel:before,
.cancel:after {
  background-color: white;
  position: absolute;
  top: 13px;
  left: 5px;
  content: "";
  display: block;
  width: 18px;
  height: 2px;
}

.cancel:before {
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.cancel:after {
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.cancel:hover {
  opacity: 1;
}

.add-another-card {
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 10px 36px;
  position: absolute;
  bottom: 0;
  text-align: left;
  color: #757577;
  font-size: 14px;
  cursor: pointer;
}

.add-another-card:before,
.add-another-card:after {
  background-color: #757577;
  position: absolute;
  bottom: 16px;
  left: 10px;
  content: "";
  display: block;
  width: 14px;
  height: 2px;
}

.add-another-card:before {
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}

.add-another-card:hover {
  color: #878792;
  background-color: #222328;
}

.inborder{
  border-radius: 3px;
  border: 1px solid green;
}
.regbut{
  border-radius: 6px;


  margin: 0 auto;
  text-align: center;
  display: -webkit-box;

  color: white;
  background-color: rgb(2, 143, 104);
  border: black 1px solid;
}
.regbut:hover{
  background-color: #f4f4f4;
  color: black; 
}
</style>