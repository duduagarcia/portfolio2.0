<script setup lang="ts">
type navLink = {
    title: string;
    name: string;
    path: string;
}

const route = useRoute();

const navLinks: navLink[] = [
    { title: "Eduardo Garcia",name: "index", path: "/" },
    { title: "Works",name: "works", path: "/works" },
    { title: "About",name: "about", path: "/about" },
    { title: "Contact",name: "contact", path: "/" },
]
</script>

<template>
    <header class="0 w-screen max-h-full h-14 fixed px-7 z-40 ">
        <nav >
            <ul class="flex  justify-between gap-4 mt-3 desktop">
                <li v-for="navLink,index in navLinks" :key="index" class="nav-link" :class="{'active-link': false}">
                    <NuxtLink :to="navLink.path">{{ navLink.title }}</NuxtLink>
                </li>
                <li class="circle"><button class="uppercase">En</button></li>
                <li class=" circle"><button class="uppercase">Pt</button></li>
            </ul>
            <ul class="mt-3 mobile">
                <li class="nav-link">teste</li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.nav-link{
    border-radius: 100px;
    flex: 1 1 0;
    border: 1px solid var(--brand_light_gray);
    cursor: pointer;
    background-color: var(--brand_white);
}

.nav-link a {
    display: block;
    border-radius: 100px;
    width: 100%;
    height: 100%;
    padding: 6px 12px;

}

.circle{
    border-radius: 100%;
    height: 38px;
    width: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border: 1px solid var(--brand_light_gray);
}

.active-link{
    background-color: var(--brand_black_3);
    color: var(--brand_white);
    border: none;
}

.mobile{
    display: none;
}

@media screen and (max-width: 1000px){
    .desktop{
        display: none;
    }

    .mobile{
        display: block;
    }
    
}
</style>