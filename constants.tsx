import React from 'react';
import { Chapter } from './types';
import { 
  Target, 
  Search, 
  Flag, 
  BarChart2, 
  Users, 
  Activity,
  Building2,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Scale,
  BrainCircuit,
  TrendingUp,
  ShieldAlert,
  Layers,
  Compass
} from 'lucide-react';

export const KPI_DATABASE = [
  // Perspectiva Financiera
  { id: 1, text: "Costo promedio por egreso hospitalario", perspective: "Financiera", type: "Eficiencia", explanation: "Mide la eficiencia del gasto (Cap. 9.3.1)." },
  { id: 2, text: "Porcentaje de ejecución presupuestaria anual", perspective: "Financiera", type: "Resultado", explanation: "Clave en hospitales públicos para evitar subejecución (Cap. 10.1)." },
  { id: 3, text: "Ingreso por cama ocupada por día (ICOD)", perspective: "Financiera", type: "Eficiencia", explanation: "Indicador típico de rentabilidad en clínicas privadas (Cap. 10.2)." },
  { id: 4, text: "Gasto de bolsillo promedio por usuario", perspective: "Financiera", type: "Impacto", explanation: "Mide la protección financiera (Cap. 4.2)." },

  // Perspectiva Usuarios/Pacientes
  { id: 5, text: "Net Promoter Score (NPS) en Urgencia", perspective: "Usuarios", type: "Satisfacción", explanation: "Mide la lealtad y satisfacción del paciente (Cap. 6.2.2)." },
  { id: 6, text: "Tiempo de espera para primera consulta", perspective: "Usuarios", type: "Acceso", explanation: "Indicador crítico de oportunidad de atención." },
  { id: 7, text: "Porcentaje de reclamos respondidos en 10 días", perspective: "Usuarios", type: "Calidad", explanation: "Estándar de trato digno y respuesta institucional." },
  { id: 8, text: "Tasa de satisfacción con la hotelería", perspective: "Usuarios", type: "Satisfacción", explanation: "Relevante en clínicas para diferenciación." },

  // Perspectiva Procesos Internos
  { id: 9, text: "Tasa de suspensión de cirugías electivas", perspective: "Procesos", type: "Eficiencia", explanation: "Refleja fallas en la programación o logística (Cap. 9.3)." },
  { id: 10, text: "Porcentaje de ocupación de pabellones", perspective: "Procesos", type: "Eficiencia", explanation: "Uso de capacidad instalada." },
  { id: 11, text: "Tasa de infecciones intrahospitalarias (IAAS)", perspective: "Procesos", type: "Calidad Clínica", explanation: "Indicador de seguridad del paciente (Cap. 3.4.4)." },
  { id: 12, text: "Días estada promedio por GRD", perspective: "Procesos", type: "Eficiencia", explanation: "Gestión clínica de la hospitalización." },

  // Perspectiva Aprendizaje y Crecimiento
  { id: 13, text: "Porcentaje de ausentismo laboral por licencia médica", perspective: "Aprendizaje", type: "Clima", explanation: "Refleja salud mental y clima organizacional (Cap. 7.4)." },
  { id: 14, text: "Tasa de rotación de personal de enfermería", perspective: "Aprendizaje", type: "Retención", explanation: "Impacta la continuidad del cuidado." },
  { id: 15, text: "Horas de capacitación por funcionario al año", perspective: "Aprendizaje", type: "Desarrollo", explanation: "Inversión en capital humano." },
  { id: 16, text: "Adherencia a protocolos de lavado de manos", perspective: "Aprendizaje", type: "Cultura", explanation: "Mide cultura de seguridad." },

  // Perspectiva Valor Social / Salud Pública
  { id: 17, text: "Porcentaje de cobertura de vacunación en población objetivo", perspective: "Valor Social", type: "Impacto", explanation: "Específico de salud pública (Cap. 9.3.1)." },
  { id: 18, text: "Tasa de resolución en Atención Primaria", perspective: "Valor Social", type: "Efectividad", explanation: "Capacidad de la red para resolver sin derivar." },
  { id: 19, text: "Disminución de listas de espera GES vencidas", perspective: "Valor Social", type: "Derechos", explanation: "Cumplimiento de garantías legales." },
  { id: 20, text: "Alcance de programas de prevención comunitaria", perspective: "Valor Social", type: "Cobertura", explanation: "Vinculación con el medio." }
];

export const CHAPTERS: Chapter[] = [
  {
    id: 'intro',
    title: '1. Fundamentos y Contexto',
    description: 'Propósito, importancia y diferencias estructurales entre salud pública y privada.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center gap-2">
            <BookOpen size={24}/> Propósito de la Planificación (Cap. 1.1)
          </h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            La planificación estratégica en salud no es solo una herramienta de gestión técnica; es una <strong>función directiva esencial</strong>. Su propósito es articular visión, acción colectiva, recursos y legitimidad social. A diferencia de otros sectores, aquí las fallas impactan directamente en la vida y dignidad de las personas.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
              <strong className="text-teal-900 block mb-2">¿Para qué sirve? (Cap. 1.2)</strong>
              <ul className="list-disc list-inside text-sm text-teal-800 space-y-1">
                <li>Definir prioridades ante recursos escasos (costo de oportunidad).</li>
                <li>Alinear equipos clínicos y administrativos (gobernanza).</li>
                <li>Anticipar crisis sanitarias (resiliencia).</li>
                <li>Cumplir estándares de acreditación.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-2">Principios Modernos (Cap. 2.2)</strong>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Enfoque centrado en las personas.</li>
                <li>Gobernanza clínica basada en evidencia.</li>
                <li>Articulación en red (RISS).</li>
                <li>Integración de gestión clínica y financiera.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h4 className="font-bold text-lg mb-6 text-slate-800 border-b pb-2 flex items-center gap-2">
            <Scale size={20}/> Diferencias Estructurales: Público vs. Privado (Cap. 10)
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-700">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                <tr>
                  <th className="px-4 py-3">Dimensión</th>
                  <th className="px-4 py-3 text-blue-800">Hospital Público</th>
                  <th className="px-4 py-3 text-indigo-800">Clínica Privada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Mandato</td>
                  <td className="px-4 py-3">Garantizar derecho a la salud (Constitución).</td>
                  <td className="px-4 py-3">Sostenibilidad y competitividad.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Financiamiento</td>
                  <td className="px-4 py-3">Rigidez presupuestaria (DIPRES).</td>
                  <td className="px-4 py-3">Autosuficiencia y venta de servicios.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Gobernanza</td>
                  <td className="px-4 py-3">Jerárquica, subordinada al SSV/MINSAL.</td>
                  <td className="px-4 py-3">Corporativa (Directorios), autónoma.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Horizonte</td>
                  <td className="px-4 py-3">4-6 años (ciclos políticos).</td>
                  <td className="px-4 py-3">3-5 años (ciclos de mercado/inversión).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs text-slate-500 italic text-center">
            *Ambos sectores convergen en la necesidad de calidad, seguridad del paciente y eficiencia (Cap. 1.3.4).
          </p>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 1,
        question: "¿Cuál es una diferencia clave en la gobernanza entre hospitales públicos y privados según el manual?",
        options: [
          "Los privados no tienen directores médicos.",
          "Los públicos tienen autonomía financiera total.",
          "Los públicos dependen jerárquicamente del Servicio de Salud y normativas del MINSAL.",
          "Los privados se rigen por el Estatuto Administrativo."
        ],
        correctAnswer: 2,
        explanation: "Correcto. La gobernanza pública es jerárquica e integrada a la red estatal (Cap. 1.3.2), mientras que la privada es corporativa y autónoma."
      },
      {
        id: 101,
        question: "¿Qué principio de gestión moderna implica pasar de una lógica de 'producción' a una de 'resultados en salud'?",
        options: [
          "Digitalización de procesos",
          "Enfoque centrado en el valor clínico-social",
          "Rigidez presupuestaria",
          "Marketing sanitario"
        ],
        correctAnswer: 1,
        explanation: "El enfoque de valor (Value-Based Healthcare) busca maximizar los resultados relevantes para el paciente, no solo el volumen de atenciones (Cap. 2.2)."
      }
    ]
  },
  {
    id: 'diagnostico',
    title: '2. Diagnóstico Estratégico',
    description: 'Análisis interno, externo, stakeholders y definición de Brechas Críticas.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <div className="bg-slate-100 p-4 rounded-lg text-slate-700 text-sm italic border-l-4 border-slate-400">
          "El diagnóstico estratégico no es un listado de problemas, es una lectura interpretativa de la realidad institucional para tomar decisiones." (Cap. 4)
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Análisis Interno */}
          <div className="border border-teal-200 rounded-lg bg-teal-50/30 p-5">
            <h4 className="font-bold text-lg text-teal-900 mb-3 flex items-center gap-2"><Search size={20}/> Análisis Interno (Cap. 4.3)</h4>
            <p className="text-xs text-teal-800 mb-3">Evalúa capacidades y recursos endógenos:</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong>Gobernanza:</strong> ¿Es clara la estructura de decisión?</li>
              <li><strong>RRHH:</strong> Clima, competencias, rotación, burnout.</li>
              <li><strong>Procesos:</strong> Gestión clínica, flujos, listas de espera.</li>
              <li><strong>Finanzas:</strong> Eficiencia, deuda, costos operacionales.</li>
              <li><strong>Infraestructura:</strong> Estado de conservación y brechas.</li>
            </ul>
          </div>
          
          {/* Análisis Externo */}
          <div className="border border-indigo-200 rounded-lg bg-indigo-50/30 p-5">
            <h4 className="font-bold text-lg text-indigo-900 mb-3 flex items-center gap-2"><Target size={20}/> Análisis PESTEL (Cap. 4.2)</h4>
            <p className="text-xs text-indigo-800 mb-3">Factores exógenos que condicionan la estrategia:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2 rounded border border-indigo-100"><strong className="text-indigo-700">P</strong>olítico: Reformas, elecciones.</div>
              <div className="bg-white p-2 rounded border border-indigo-100"><strong className="text-indigo-700">E</strong>conómico: Inflación, presupuesto.</div>
              <div className="bg-white p-2 rounded border border-indigo-100"><strong className="text-indigo-700">S</strong>ocial: Envejecimiento, demandas.</div>
              <div className="bg-white p-2 rounded border border-indigo-100"><strong className="text-indigo-700">T</strong>ecnológico: IA, Telemedicina.</div>
              <div className="bg-white p-2 rounded border border-indigo-100"><strong className="text-indigo-700">E</strong>cológico: Cambio climático.</div>
              <div className="bg-white p-2 rounded border border-indigo-100"><strong className="text-indigo-700">L</strong>egal: Leyes (Fármacos, Derechos).</div>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h4 className="font-bold text-lg text-slate-800 border-b pb-2">Herramientas Críticas de Diagnóstico</h4>
          
          <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500 shadow-sm">
            <h5 className="font-bold text-amber-900 mb-2 flex items-center gap-2"><AlertTriangle size={18}/> 1. La Brecha Crítica (Cap. 4.4)</h5>
            <p className="text-sm text-amber-800 mb-2">
              No todo problema es estratégico. Una brecha crítica es una <strong>diferencia significativa, sostenida y estructural</strong> entre la situación actual y el estándar necesario.
            </p>
            <ul className="text-xs text-amber-900 list-disc list-inside">
              <li>Ej. Operativo: "Falta confort en sala de espera".</li>
              <li>Ej. Crítico: "Lista de espera quirúrgica de 2 años con estándar de 6 meses".</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <h5 className="font-bold text-blue-900 mb-2 flex items-center gap-2"><Users size={18}/> 2. Análisis de Actores (Stakeholders) (Cap. 4.4.6)</h5>
            <p className="text-sm text-blue-800 mb-2">
              Basado en el modelo de Gardner, se clasifican según <strong>Poder</strong> (capacidad de influir) e <strong>Interés</strong>.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-blue-900">
              <div className="bg-white p-2 rounded"><strong>Promotores:</strong> Alto Poder / Alto Interés (Aliados clave).</div>
              <div className="bg-white p-2 rounded"><strong>Latentes:</strong> Alto Poder / Bajo Interés (Mantener satisfechos).</div>
              <div className="bg-white p-2 rounded"><strong>Defensores:</strong> Bajo Poder / Alto Interés (Mantener informados).</div>
              <div className="bg-white p-2 rounded"><strong>Apatéticos:</strong> Bajo Poder / Bajo Interés (Monitorear).</div>
            </div>
          </div>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 2,
        question: "En el análisis PESTEL, ¿dónde clasificarías la implementación obligatoria de la nueva Ley de Fármacos?",
        options: ["Tecnológico", "Económico", "Legal", "Ecológico"],
        correctAnswer: 2,
        explanation: "Es un factor Legal (normativa vinculante) que proviene de una decisión Política y afecta el entorno regulatorio (Cap. 4.2)."
      },
      {
        id: 202,
        question: "Si un gremio médico tiene mucha capacidad de bloquear el plan pero poco interés actual en él, ¿qué tipo de actor es?",
        options: ["Promotor", "Latente", "Defensor", "Apatético"],
        correctAnswer: 1,
        explanation: "Es un actor Latente (Alto Poder / Bajo Interés). La estrategia es mantenerlos satisfechos para que no se activen negativamente (Cap. 4.4.6)."
      }
    ]
  },
  {
    id: 'formulacion',
    title: '3. Formulación Estratégica',
    description: 'Definiendo Misión, Visión, Valores y Objetivos SMART.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=2000',
    content: (
      <div className="space-y-8">
        <p className="text-slate-700">La formulación es el "núcleo ético-político" de la estrategia. Responde a las preguntas fundamentales de identidad y rumbo institucional.</p>
        
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-bold text-teal-800 mb-4 text-lg border-b pb-2">Componentes Identitarios (Cap. 5.1 y 9.2)</h4>
            <div className="space-y-4 text-sm">
              <div className="bg-slate-50 p-3 rounded">
                <strong className="text-teal-700">Misión (Propósito):</strong>
                <p className="mt-1 text-slate-600">Debe incluir explícitamente: Propósito sanitario + Población objetivo + Diferenciación + Marco ético.</p>
                <em className="block mt-2 text-xs text-slate-500">"Somos un hospital público que entrega atención especializada a la población del Valle Central..."</em>
              </div>
              <div className="bg-slate-50 p-3 rounded">
                <strong className="text-teal-700">Visión (Futuro):</strong>
                <p className="mt-1 text-slate-600">Imagen deseada a 5-10 años. Debe ser transformadora, motivadora y ambiciosa pero realista.</p>
              </div>
              <div className="bg-slate-50 p-3 rounded">
                <strong className="text-teal-700">Valores (Conducta):</strong>
                <p className="mt-1 text-slate-600">Principios ético-operativos. Ej: Calidad, Seguridad, Dignidad, Transparencia.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 text-white p-5 rounded-lg shadow-lg">
            <h4 className="font-bold text-teal-400 mb-4 text-lg flex items-center gap-2">
              <Compass size={20}/> Objetivos SMART (Cap. 5.2)
            </h4>
            <p className="text-xs text-slate-300 mb-4">Los objetivos operacionalizan el rumbo. Deben cumplir rigurosamente con:</p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="font-mono text-teal-400 font-bold text-lg">S</span>
                <span className="text-sm"><strong>Específico:</strong> ¿Qué área o problema aborda?</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-mono text-teal-400 font-bold text-lg">M</span>
                <span className="text-sm"><strong>Medible:</strong> ¿Tiene indicador asociado?</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-mono text-teal-400 font-bold text-lg">A</span>
                <span className="text-sm"><strong>Alcanzable:</strong> ¿Es realista con los recursos?</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-mono text-teal-400 font-bold text-lg">R</span>
                <span className="text-sm"><strong>Relevante:</strong> ¿Aporta a la Misión?</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-mono text-teal-400 font-bold text-lg">T</span>
                <span className="text-sm"><strong>Temporal:</strong> ¿Cuándo termina? (Plazo).</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-50 p-4 rounded border border-teal-200">
          <h4 className="font-bold text-teal-900 mb-2 text-sm">Priorización de Objetivos (Cap. 5.3)</h4>
          <p className="text-sm text-teal-800 mb-3">No se puede hacer todo. Se deben seleccionar batallas usando:</p>
          <ul className="list-disc list-inside text-xs text-teal-800 space-y-1">
            <li><strong>Matriz de Impacto vs. Factibilidad:</strong> Evitar proyectos de "Alto Esfuerzo y Bajo Impacto".</li>
            <li><strong>Método Hanlon:</strong> Magnitud, severidad y eficacia de la intervención.</li>
            <li><strong>Alineación Política:</strong> Coherencia con metas nacionales (ENS 2030).</li>
          </ul>
        </div>
      </div>
    ),
    quiz: [
      {
        id: 3,
        question: "¿Qué característica 'SMART' falta claramente en el objetivo: 'Mejorar la atención de pacientes lo antes posible'?",
        options: ["Es Específico", "Es Medible y Temporal", "Es Relevante", "Es Alcanzable"],
        correctAnswer: 1,
        explanation: "Falta definir CÓMO se mide (Medible) y una fecha exacta (Temporal). 'Mejorar' es subjetivo y 'lo antes posible' no es un plazo válido."
      },
      {
        id: 302,
        question: "¿Cuál es el propósito principal de la Visión institucional según el manual?",
        options: ["Describir lo que la institución hace hoy", "Cumplir con un requisito legal", "Proyectar una imagen futura transformadora y motivadora", "Listar los servicios clínicos disponibles"],
        correctAnswer: 2,
        explanation: "La visión es prospectiva (hacia dónde vamos, 5-10 años), a diferencia de la misión que es identitaria (quiénes somos hoy) (Cap. 5.1.2)."
      }
    ]
  },
  {
    id: 'operativo',
    title: '4. Plan Operativo y BSC',
    description: 'Balanced Scorecard, KPIs y asignación de recursos.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <p className="text-slate-700">La estrategia aterriza en el Plan Operativo Estratégico (POE) anual. Para medir el avance, utilizamos el Balanced Scorecard (BSC) adaptado a la realidad sanitaria.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2"><BarChart2 size={20}/> BSC en Salud (Cap. 9.3)</h4>
            <p className="text-xs text-slate-500 mb-3">Kaplan & Norton adaptado: no solo financiero.</p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="p-2 bg-slate-50 rounded border-l-4 border-blue-500">
                <strong>1. Financiera:</strong> Eficiencia del gasto, sostenibilidad, cumplimiento presupuestario.
              </li>
              <li className="p-2 bg-slate-50 rounded border-l-4 border-blue-500">
                <strong>2. Usuarios/Pacientes:</strong> Satisfacción, acceso, trato digno, tiempos de espera.
              </li>
              <li className="p-2 bg-slate-50 rounded border-l-4 border-blue-500">
                <strong>3. Procesos Internos:</strong> Calidad clínica, seguridad, gestión de camas, logística.
              </li>
              <li className="p-2 bg-slate-50 rounded border-l-4 border-blue-500">
                <strong>4. Aprendizaje:</strong> Capacitación, clima laboral, tecnología, innovación.
              </li>
              <li className="p-2 bg-teal-50 rounded border-l-4 border-teal-500">
                <strong className="text-teal-800">5. Valor Social / Salud Pública:</strong> *Exclusivo salud.* Impacto sanitario, aporte a la red y comunidad.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-5 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><Layers size={18}/> Tipos de Indicadores (KPI) (Cap. 6.2)</h4>
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-3 gap-2 font-bold bg-slate-100 p-2 rounded">
                  <span>Tipo</span><span>Qué mide</span><span>Ejemplo</span>
                </div>
                <div className="grid grid-cols-3 gap-2 p-2 border-b">
                  <span className="text-purple-700 font-bold">Proceso</span><span>Actividades</span><span>% funcionarios capacitados</span>
                </div>
                <div className="grid grid-cols-3 gap-2 p-2 border-b">
                  <span className="text-purple-700 font-bold">Resultado</span><span>Logros directos</span><span>Disminución lista espera</span>
                </div>
                <div className="grid grid-cols-3 gap-2 p-2 border-b">
                  <span className="text-purple-700 font-bold">Impacto</span><span>Efecto final</span><span>Reducción mortalidad</span>
                </div>
                <div className="grid grid-cols-3 gap-2 p-2">
                  <span className="text-purple-700 font-bold">Eficiencia</span><span>Recursos/Logro</span><span>Costo promedio cama</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-bold text-orange-800 text-sm mb-2">Gestión de Recursos (Cap. 6.4)</h4>
              <p className="text-xs text-orange-700 mb-2">Cada acción del POE requiere recursos asignados:</p>
              <div className="flex gap-2 flex-wrap text-xs font-bold text-orange-600">
                <span className="px-2 py-1 bg-white border border-orange-200 rounded">Humanos</span>
                <span className="px-2 py-1 bg-white border border-orange-200 rounded">Financieros</span>
                <span className="px-2 py-1 bg-white border border-orange-200 rounded">Tecnológicos</span>
                <span className="px-2 py-1 bg-white border border-orange-200 rounded">Logísticos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    quiz: [
      {
        id: 4,
        question: "¿Qué perspectiva es distintiva del BSC en salud pública y no suele estar en empresas tradicionales?",
        options: ["Perspectiva Financiera", "Perspectiva Valor Social / Salud Pública", "Perspectiva de Clientes", "Perspectiva de Procesos"],
        correctAnswer: 1,
        explanation: "Correcto. En salud, el fin último no es solo financiero o de cliente, sino el impacto en la salud de la población (Valor Social)."
      },
      {
        id: 402,
        question: "Si mido el 'Número de cirugías realizadas por pabellón', ¿qué tipo de indicador es?",
        options: ["Impacto", "Proceso / Productividad", "Calidad", "Resultado sanitario"],
        correctAnswer: 1,
        explanation: "Es un indicador de proceso o productividad (cuánto hago), no necesariamente de resultado sanitario (cómo quedó el paciente) (Cap. 6.2)."
      }
    ]
  },
  {
    id: 'implementacion',
    title: '5. Implementación y Cambio',
    description: 'Liderazgo, gobernanza, resistencia y modelo de Kotter.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000',
    content: (
      <div className="space-y-8">
        <p className="text-slate-700">El papel lo aguanta todo, la realidad no. La implementación es donde la estrategia triunfa o fracasa. Requiere gobernar el proceso y gestionar el lado humano del cambio.</p>
        
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
              <Users size={20} className="text-blue-600"/> Liderazgo y Gobernanza (Cap. 7.1 y 7.2)
            </h4>
            <div className="space-y-4 text-sm text-slate-700">
              <p><strong>Gobernanza:</strong> Estructura formal de decisiones (Comités, Consejos). Debe ser legítima y transparente.</p>
              <div>
                <strong>Estilos de Liderazgo (Cap. 7.2.2):</strong>
                <ul className="mt-2 space-y-2 list-disc list-inside text-slate-600">
                  <li><strong>Transformacional:</strong> Motiva e inspira a través de la visión. Esencial para el cambio.</li>
                  <li><strong>Transaccional:</strong> Se basa en premios y castigos. Útil para metas operativas a corto plazo.</li>
                  <li><strong>Distribuido:</strong> Clave en salud. El director no puede solo; requiere empoderar líderes clínicos.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
            <h4 className="font-bold text-orange-900 flex items-center gap-2 mb-4">
              <Flag size={20}/> Gestión del Cambio (Modelo Kotter) (Cap. 7.3)
            </h4>
            <p className="text-sm text-orange-800 mb-4">Para vencer la inercia institucional, el manual adapta los 8 pasos:</p>
            <ol className="list-decimal list-inside text-sm text-orange-800 font-medium space-y-1 pl-2">
              <li>Crear <strong>sentido de urgencia</strong>.</li>
              <li>Formar una <strong>coalición guía</strong>.</li>
              <li>Crear una <strong>visión</strong> clara.</li>
              <li><strong>Comunicar</strong> la visión incansablemente.</li>
              <li><strong>Empoderar</strong> a otros para actuar.</li>
              <li>Generar <strong>victorias cortas</strong> (Quick Wins).</li>
              <li><strong>Consolidar</strong> mejoras.</li>
              <li><strong>Anclar</strong> el cambio en la cultura.</li>
            </ol>
          </div>
        </div>

        <div className="bg-slate-100 p-4 rounded text-sm text-slate-700 border-l-4 border-slate-400">
          <strong className="flex items-center gap-2 mb-1"><ShieldAlert size={16}/> Resistencia y Barreras (Tabla 7.3.3):</strong>
          La resistencia no siempre es boicot. Puede ser cultural ("siempre se ha hecho así"), falta de tiempo protegido, desconfianza en la dirección o ambigüedad de roles. Se gestiona con comunicación y participación, no solo con autoridad.
        </div>
        
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <strong className="text-green-900 block mb-2 text-sm flex items-center gap-2"><TrendingUp size={16}/> Sostenibilidad (Cap. 11.2)</strong>
          <p className="text-xs text-green-800">
            La estrategia no termina al implementarse. Requiere <strong>Monitoreo Continuo</strong> (Cap. 8) y capacidad de <strong>Resiliencia</strong> (Cap. 11.3) para adaptarse a crisis (pandemias, recortes) sin perder el propósito.
          </p>
        </div>
      </div>
    ),
    quiz: [
      {
        id: 5,
        question: "Según el modelo de Kotter, ¿cuál es el primer paso crítico para iniciar un cambio?",
        options: ["Contratar consultores", "Crear sentido de urgencia", "Despedir opositores", "Comprar software"],
        correctAnswer: 1,
        explanation: "El paso 1 es 'Crear sentido de urgencia'. Si la organización no siente la necesidad imperiosa de cambiar, nada ocurrirá."
      },
      {
        id: 502,
        question: "¿Qué estilo de liderazgo es descrito como esencial en salud para involucrar a los equipos clínicos en la toma de decisiones?",
        options: ["Liderazgo Autoritario", "Liderazgo Distribuido", "Liderazgo Laissez-faire", "Liderazgo Carismático puro"],
        correctAnswer: 1,
        explanation: "El liderazgo distribuido permite que la toma de decisiones se comparta con quienes tienen el conocimiento técnico (clínicos), aumentando la legitimidad (Cap. 7.2)."
      }
    ]
  }
];