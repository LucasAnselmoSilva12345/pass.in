import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from 'lucide-react';
import { IconButton } from './Icon-Button';

export function AttendeeList() {
  return (
    <section className="w-full lg:max-w-[1216px] mx-auto px-5">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="w-full lg:w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent border-0 p-0 text-sm flex-1 outline-none"
            type="text"
            placeholder="Buscar participante"
          />
        </div>
      </div>

      <div className="mt-5 border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              >
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participantes
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data do check-in
              </th>
              <th
                style={{ width: 64 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <tr
                  key={index}
                  className="border-b border-white/10 hover:bg-white/5"
                >
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <input
                      type="checkbox"
                      className="size-4 bg-black/20 rounded border border-white/10"
                    />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">45895</td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Lucas Anselmo
                      </span>
                      <span>lucasanselmodasilva02@gmail.com</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    4 dias atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    2 dias atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <IconButton transparent>
                      <MoreHorizontal className="size-4" />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
                Mostrando 10 de 224 itens
              </td>
              <td
                className="py-3 px-4 text-sm text-zinc-300 text-right"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 22</span>
                  <div className="flex gap-1.5">
                    <IconButton>
                      <ChevronsLeft className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronLeft className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronRight className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronsRight className="size-4" />
                    </IconButton>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
