<template>
    <div>
        <LocalComponent></LocalComponent>
        <SingleFileComponent></SingleFileComponent>
    </div>
</template>
<script>
import SingleFileComponent from './SingleFileComponent';
import LocalComponent from './javascript-file';
export default {
    components:{
        SingleFileComponent,
        LocalComponent
    }
}
</script>