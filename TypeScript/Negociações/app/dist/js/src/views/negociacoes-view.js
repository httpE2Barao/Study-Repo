import { View } from "./view.js";
export class NegociacaoView extends View {
    template(model) {
        return `
            <table class='table table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
            return `
                            <tr>
                                <td>${this.conversor(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                            <script>alert('oi')</script>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    conversor(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
