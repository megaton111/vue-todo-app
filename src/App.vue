<template>
  <div id="app">
    
    <header class="todo-header">
      <div class="date"><h1>{{ date }}<br /><span>{{ day }}</span></h1></div>
      <div class="count">할일 <span>{{ todoCount }}</span>개 남음</div>
    </header>

    <div class="todo-list">
      <div class="todo-list-item" v-for="(item , idx) in todos" :key="idx" :class="{ complete : item.complete }">
        <label :for="idx+'todo'">
          <input type="checkbox" v-model="item.complete" :id="idx+'todo'" />
          <font-awesome-icon v-if="item.complete" class="ic_check" :icon="['fa', 'check-circle' ]" />
          <i v-else class="ic_check_circle" :icon="['far', 'check-circle' ]" />
        </label>
        {{ item.text }}
        <button class="btn_delete" type="button" @click="deleteEventHandler( idx )"><font-awesome-icon :icon="['far', 'trash-alt' ]" /></button>
      </div>
    </div>

    <div class="todo-input">
      <div class="todo-input-bx">
        <input type="text" v-model="inputText" />
      </div>
      <button type="button" @click="addEventHandler" class="btn_add">
        <font-awesome-icon :icon="['fa', 'plus' ]" />
      </button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  } ,
  data () {
    return {
      todos : [
        // { text : '개발 세팅하기' , complete : false } ,
        // { text : '미국 여행 비행기 예약하기' , complete : false } ,
        // { text : '프린트 출력' , complete : false } ,
      ] ,
      inputText : '' , 
      date : '' , 
      day : '' , 
    }
  } ,
  methods : {
    addEventHandler() {
      if( this.inputText == '' ) {
        alert( '할일을 입력하세요' ) ; 
      } else {
        this.todos.push({ text : this.inputText, complete : false }) ; 
        this.inputText = '' ; // 입력값 초기화
      }
    } ,
    deleteEventHandler( idx ) {
      this.todos.splice( idx, 1 ) ; 
    } 
  } , 
  created(){
    let t = new Date() ;
    const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    this.date = t.getFullYear() + '년 ' + ( t.getMonth() + 1 ) + '월 ' + t.getDate() + '일' ; 
    this.day = WEEKDAY[t.getDay()];

  } , 
  computed : {
    todoCount () {
      return this.todos.filter(item=>!item.complete).length ;
    }
  }
}
</script>

<style>
</style>