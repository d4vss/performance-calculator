<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="page">
        <h2>A320 Performance Calculator</h2>
        <p>Welcome to the A320 Performance Calculator, the go-to resource for flight simulation enthusiasts looking to calculate various performance metrics for the Airbus A320 aircraft. This web-based calculator is designed to provide accurate and reliable performance calculations, based on the aircraft's performance data.</p>
        <p>With the A320 Performance Calculator, you can easily input a variety of parameters, such as aircraft weight, altitude, temperature, and runway length, to calculate important performance metrics such as takeoff distance, landing distance, and climb performance. This calculator has advanced features, including takeoff and landing flap settings, flex temperature calculations, and alternate airport planning, allow you to optimize your flight planning and ensure realistic and immersive simulation of the aircraft.</p>
        <p>Our user-friendly interface makes it easy to input and retrieve data, and the calculator is designed to be flexible, allowing you to customize inputs to your specific simulation setup and preferences. Whether you are a seasoned flight simulation enthusiast or just starting out, the A320 Performance Calculator is an essential tool for optimizing your flight simulation experience and ensuring realistic and immersive operation of the Airbus A320.</p>
        <p>Trust in the accuracy and reliability of this performance calculations, based on the Airbus A320's performance data. Start optimizing your flight simulation experience and ensuring realistic and immersive operation of the aircraft today with the A320 Performance Calculator.</p>
        <p>Press <RouterLink to="/calculator">here</RouterLink> to start!</p>
    </div>
</template>

<style scoped>
a {
    color: var(--color-accent);
    text-decoration: underline;
}
p {
    margin-bottom: 16px;
}
</style>