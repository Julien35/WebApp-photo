<template>
    <section>

        <article>Total : {{Number.parseFloat(totalCart).toFixed(2)}} €</article>


        <DropIn v-if="authToken !== null"
                :authToken="authToken"
                :collectCardHolderName="true"
                :enableDataCollector="true"
                :enablePayPal="false"
                :totalCart="totalCart"
                :enable-drop-in-test-button="false"
        />

    </section>

</template>

<script>
    import DropIn from './DropIn';
    import {HTTP} from '../http-common';

    export default {
        name: 'Checkout',
        components: {
            DropIn,
        },
        data() {
            return {
                authToken: null,
                totalCart: 0,
            }
        },

        mounted() {
            setTimeout(() => {

                this.getToken();

                this.$eventBus.$on('tokenize', () => {
                    this.submitTransaction();
                });

                this.$eventBus.$on('change-total-cart', totalCart => {
                    this.totalCart = totalCart;
                });

            }, 2000);

        },

        methods: {
            getToken() {
                HTTP
                    .get('/checkout/client-token')
                    .then((response) => {
                        this.authToken = response.data;
                    })
                    .catch((response) => {
                        console.log(response);
                        this.authToken = false;
                    });
            },

            submitTransaction() {
                this.$emit('tokenizeChild', this.totalCart);
            }
        }
    }
</script>

<style scoped></style>
