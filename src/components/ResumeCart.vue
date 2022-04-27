<template>
  <div class="resume-chart">
    <!-- partial:index.partial.html -->
    <div class="container">
      <div class="py-5 text-center">
        <h2>Resumo da compra</h2>
        <p class="lead">
          Confira os parâmetros abaixo e modifique caso seja necessário
        </p>
      </div>

      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Seu Carrinho</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                lh-condensed
              "
            >
              <div>
                <h6 class="my-0">Product name</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">R$ 12,00</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                lh-condensed
              "
            >
              <div>
                <h6 class="my-0">Second product</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">R$ 8,00</span>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                lh-condensed
              "
            >
              <div>
                <h6 class="my-0">Third item</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">R$ 5,00</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Cupom de desconto</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-R$ 5,00</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (BRL)</span>
              <strong>R$ 20,00</strong>
            </li>
          </ul>

          <form class="card p-2">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Cupom de desconto"
              />
              <div class="input-group-append">
                <button
                  type="submit"
                  class="btn btn-secondary"
                  @click.stop.prevent="validate(code)"
                >
                  Resgatar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Dados da compra</h4>
          <form class="needs-validation" novalidate @submit.stop.prevent>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Nome</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">
                  É necessario informar um nome válido.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Sobrenome</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">
                  É necessario informar um sobrenome válido.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="username">WhatsApp</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">#</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="whatsapp"
                  placeholder="WhatsApp"
                  required
                />
                <div class="invalid-feedback" style="width: 100%">
                  O número de WhatsApp é requerido
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email"
                >Email <span class="text-muted">(Opcional)</span></label
              >
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div class="invalid-feedback">
                Insira um email válido para receber as notificações
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Endereço</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="1234 Main St"
                required
              />
              <div class="invalid-feedback">
                Favor inserir o endereço de entrega
              </div>
            </div>

            <div class="mb-3">
              <label for="address2"
                >Complemento <span class="text-muted">(Opcional)</span></label
              >
              <input
                type="text"
                class="form-control"
                id="address2"
                placeholder="Apartamento ou Condomínio"
              />
            </div>

            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">País</label>
                <select
                  class="custom-select d-block w-100"
                  id="country"
                  required
                >
                  <option value="">Escolha...</option>
                  <option>Brasil</option>
                </select>
                <div class="invalid-feedback">
                  Favor escolher um país válido
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">Estado</label>
                <select class="custom-select d-block w-100" id="state" required>
                  <option value="">Escolha...</option>
                  <option>São Paulo</option>
                </select>
                <div class="invalid-feedback">
                  Favor informar um estado válido
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Cep</label>
                <input
                  type="text"
                  class="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">
                  É necessário informar um cep válido
                </div>
              </div>
            </div>

            <hr class="mb-4" />
            <button
              class="btn btn-primary btn-lg btn-block"
              @click="goToPayment"
            >
              Continuar para Pagamento
            </button>
          </form>
        </div>
      </div>

      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; 2017-2019 Company Name</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Privacy</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>
    <!-- partial -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
      customer: {
        name: "",
        lastName: "",
        whatsApp: "",
        email: "",
        shipinfo: {
          address: "",
          address2: "",
          country: "",
          state: "",
          zipCode: "",
        },
      },
      cart: [],
    };
  },
  created() {},
  methods: {
    validate(code) {
      console.log(code);
    },
    goToPayment() {
      const payload = {
        code: this.code,
        customer: {
          name: this.customer.name,
          lastName: this.customer.lastName,
          whatsApp: this.customer.whatsApp,
          email: this.customer.email,
          shipinfo: {
            address: this.customer.shipinfo.address,
            address2: this.customer.shipinfo.address2,
            country: this.customer.shipinfo.country,
            state: this.customer.shipinfo.state,
            zipCode: this.customer.shipinfo.zipCode,
          },
        },
        cart: this.customer.cart,
      };

      const hash = btoa(JSON.stringify(payload));

      this.$router.replace({ path: "/payment", query: { hash } });
    },
  },
};
</script>

<style>
</style>