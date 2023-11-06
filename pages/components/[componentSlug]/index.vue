<template>
  
  <div class="content p-8 text-black">
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>
  <h1 class="text-center">Components</h1>

  </div>

</template>
<script setup>

 
</script>
<style>
.content{
  background:white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-family: 'Roboto', sans-serif;
}
.tabs{
  margin-top:50px;
  font-size:15px;
  padding:0px;
  list-style:none;
  background:#fff;
  box-shadow:0px 5px 20px rgba(0,0,0,0.1);
  display:inline-block;
  position:relative;
}

.tabs a{
  text-decoration:none;
  color: #777;
  text-transform:uppercase;
  padding:10px 20px;
  display:inline-block;
  position:relative;
  z-index:1;
}

.tabs a.active{
  color:black;
  font-weight:bolder
}

.tabs a i{
  margin-right:5px;
}

.tabs .selector{
  height:100%;
  display:inline-block;
  position:absolute;
  left:0px;
  top:0px;
  z-index:1;
  border-radius:50px;
}
</style>