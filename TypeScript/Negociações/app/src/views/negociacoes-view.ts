import { escape } from "../decorators/escape.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacaoView extends View<Negociacoes>{
    @escape
    protected template(model: Negociacoes): string {
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

    private conversor(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}