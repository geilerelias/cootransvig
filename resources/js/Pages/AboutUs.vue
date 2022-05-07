<template>
    <app-layout>
        <section>
            <v-sheet light class="white pb-6">
                <div class="py-2">
                    <div class="text-center my-2">
                        <div class="d-inline-flex mb-4">
                            <v-avatar class="primary"
                                      size="56">
                                <v-icon dark
                                        size="28">
                                    mdi-account-question-outline
                                </v-icon>
                            </v-avatar>
                        </div>
                        <h1 class="text-uppercase text-h5 font-weight-bold mb-2 text-center">
                            ¿Quienes somos?
                        </h1>
                        <v-responsive class="primary mx-auto mb-2" style="max-width: 28px;">
                            <v-divider role="separator" aria-orientation="horizontal" class=" theme--light"/>
                        </v-responsive>
                    </div>
                    <v-container>
                        <v-sheet class="theme--light">
                            <div class="d-flex flex-column flex-md-row">
                                <div class="w-full w-md-half d-flex align-center">
                                    <div class="pr-6 pr-md-12">
                                        <h1 class="text-h6 text-lg-h5 font-weight-bold mt-xl-4">
                                            La cooperativa de transportadores de
                                            <span class="primary--text">Villanueva La Guajira</span>
                                        </h1>
                                        <div class=" text-lg-h6 mt-5 text-justify">
                                            es una empresa
                                            dedicada al transporte, constituida e inscrita en la cámara de comercio a
                                            partir del 5 de mayo del 2003, por personas inspiradas en la prestación de
                                            servicio público especial de transporte terrestre.
                                            Actualmente cumplimos con todas las exigencias legales y además
                                            contamos con más de 12 años de presencia en el mercado.
                                            Desde entonces nuestra actividad principal está enmarcada en representar
                                            el bienestar de sus asociados y prestar un servicio y beneficio a la
                                            comunidad, haciendo énfasis en la actividad de los trabajadores y
                                            contamos con un excelente grupo calificado y apto para trabajar con
                                            nosotros, el cual se capacita de forma permanente con el fin de estar
                                            actualizado mediante cursos.

                                        </div>
                                        <div class="my-4">
                                            <inertia-link href="/contact-us"
                                                          class="text-decoration-none font-weight-bold text-h6 mt-3">
                                                Contactanos
                                            </inertia-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full w-md-half">
                                    <v-img :src="bg" style="max-height: 80vh" cover class="rounded-lg"
                                           :aspect-ratio="5/8">
                                    </v-img>
                                </div>
                            </div>
                        </v-sheet>
                    </v-container>
                </div>
            </v-sheet>
        </section>

        <section>
            <v-sheet class="primary  py-6">
                <v-container class="py-4 py-lg-8">
                    <div>
                        <v-row>
                            <v-col class="col-lg-6 col-12">
                                <div class="mb-6">
                                    <h1 class="text-h5 font-weight-bold mb-2 white--text">
                                        Misión
                                    </h1>
                                    <v-responsive class="white  mb-2" style="max-width: 28px;">
                                        <v-divider role="separator" aria-orientation="horizontal"
                                                   class=" theme--light"/>
                                    </v-responsive>
                                </div>
                                <div class=" text-lg-h6 mt-5 white--text  text-justify">
                                    Somos una cooperativa de transporte terrestre de pasajeros y mensajería en la
                                    modalidad de servicio especial debidamente habilitada por el Ministerio de
                                    Transporte, que dirige sus beneficios socio-económicos a los asociados, empleados y
                                    comunidad en general. Ofrecemos un servicio seguro, legal y confortable
                                    satisfaciendo las necesidades del usuario, contribuyendo al desarrollo y fomento del
                                    empleo, teniendo en cuenta el fiel cumplimiento de sus reglamentos internos
                                    (estatutos), y de las leyes de estado.
                                </div>
                            </v-col>

                            <v-col class="col-lg-6 col-12">
                                <div class="mb-6">
                                    <h1 class="text-h5 font-weight-bold mb-2 white--text">
                                        Visión
                                    </h1>
                                    <v-responsive class="white mb-2" style="max-width: 28px;">
                                        <v-divider role="separator" aria-orientation="horizontal"
                                                   class=" theme--light"/>
                                    </v-responsive>
                                </div>
                                <div class="text-lg-h6 mt-5 white--text text-justify">
                                    CONSTRANSVIG, en el 2026, será una cooperativa posesionada a nivel regional y
                                    nacional por ofrecer un servicio seguro al usuario, contado con una óptima
                                    infraestructura e implementación de nuevas tecnologías que mejoren los procesos
                                    productivos. Además, convertirnos en una empresa que cumpla con las expectativas de
                                    sus asociados, y ser reconocidos por promover el bienestar de sus empleados y
                                    colaboradores.
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-container>
            </v-sheet>
        </section>

        <section>
            <v-sheet class="lighten-4">

                <v-container class=" gray py-4 py-lg-8">
                    <div class="mt-12">
                        <h1 class="text-h5 font-weight-bold mb-2">
                            Valores corporativos
                        </h1>

                        <div class="v-responsive base-divider primary  mb-2" style="max-width: 28px;">
                            <v-divider style="padding-bottom: 1px"></v-divider>
                        </div>
                        <v-responsive class="mx-auto" style="max-width: 1200px;">
                            <div class="text-lg-h6 mt-5 text-justify mb-4 mt-1 text-justify">
                                Contamos con un equipo humano comprometido con nuestra empresa
                                aportando.
                            </div>
                        </v-responsive>


                        <v-row>
                            <v-col class="col-md-6 col-12" v-for="item in features" :key="item.id">
                                <v-row class="row pa-0 ma-0 text-center text-sm-left justify-center">
                                    <v-col class="col">
                                        <v-icon size="56" :class="`${item.color}--text`">
                                            {{ item.icon }}
                                        </v-icon>
                                    </v-col>

                                    <v-col class="col-md-10 col-12">
                                        <h3
                                            class="title font-weight-regular mb-3 mt-2">
                                            {{ item.name }}
                                        </h3>
                                        <p class="body-1 font-weight-light">
                                            {{ item.description }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div>
                </v-container>
            </v-sheet>
        </section>
        <section>
            <div class="v-sheet theme--light transparent">
                <div class="container py-4 py-lg-8">
                    <div class="text-center">
                        <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">
                            Nuestras
                        </div>
                        <h1 class="text-uppercase text-h5 font-weight-bold mb-2 text-center">
                            Política de calidad
                        </h1>
                        <v-responsive class="primary mx-auto mb-2" style="max-width: 28px;">
                            <v-divider role="separator" aria-orientation="horizontal" class=" theme--light"/>
                        </v-responsive>
                        <v-responsive class="mx-auto" style="max-width: 1200px;">
                            <div class="text-lg-h6 mt-5 text-justify mb-4 mt-1 text-justify">
                                En nuestra empresa cooperativa de transportes de Villanueva La Guajira
                                “COOTRANSVIG” se compromete a promocionar servicio de logística y
                                transporte oportunos cumpliendo con los requisitos de calidad, ética,
                                profesionalismo y confidencialidad para satisfacer las expectativas,
                                requerimientos y apoyada en un grupo de profesionales altamente
                                comprometidos y calificados que ponen su experiencia al servicio de los
                                usuarios, empresas e instituciones.
                            </div>
                        </v-responsive>
                    </div>
                </div>
            </div>
        </section>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import bg from '@/../images/bg-cootransvig.jpg'

export default {
    components: {
        AppLayout,
    },
    name: "AboutUs",
    data: () => ({
        bg,
        features: [
            {
                color: 'indigo',
                name: 'Respeto',
                icon: 'mdi-puzzle-heart-outline',
                description: `Todos nuestros actos para con los usuarios, empleados y asociados
                ceñidos a respetar salvaguarda.`
            }, {
                color: 'teal',
                name: 'Emprendedor',
                icon: 'mdi-sign-caution',
                description: ` Nos esforzamos en tener espíritu emprendedor con los empleados
                de la cooperativa.
                `
            }, {
                color: 'cyan',
                name: 'Integración, cooperación y colaboración',
                icon: 'mdi-code-tags-check',
                description: `Valoramos la integración, cooperación y colaboración en
                búsqueda de metas comunes.`
            }, {
                color: 'green',
                name: 'Innovador',
                icon: 'mdi-responsive',
                description: `Siempre estamos dispuestos a dar apoyo a otras personas y
                buscamos una mejoría continua de nuestros conocimientos
                profesionales.`
            }, {
                color: 'orange',
                name: 'Integridad, tratamiento equitativo',
                icon: 'mdi-order-bool-ascending-variant',
                description: `Estamos comprometidos con la integridad, tratamiento equitativo
                y respeto hacia los usuarios.`
            },
            {
                color: 'pink',
                name: 'estándares éticos',
                icon: 'mdi-cogs',
                description: 'Mantenemos elevados nuestros estándares éticos'
            },
        ]
    })
}
</script>

<style scoped>

</style>
