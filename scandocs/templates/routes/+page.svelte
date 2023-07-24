<script>
    import {activeProject} from "$lib/stores/project";
</script>

<h1>{activeProject.getActive($activeProject).meta.name}</h1>
