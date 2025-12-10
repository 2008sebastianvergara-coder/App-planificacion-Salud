
import React from 'react';
import { Chapter } from './types';
import { 
  BookOpen,
  Target, 
  Scale, 
  RefreshCw, 
  Search, 
  AlertTriangle, 
  Users, 
  Compass, 
  FileText, 
  Landmark, 
  Activity, 
  BarChart2, 
  Building2, 
  ShieldAlert, 
  CheckCircle,
  Lightbulb,
  GitMerge,
  PieChart
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
    id: 'cap1',
    title: '1. Introducción y Contexto',
    description: 'Propósito, importancia y diferencias estructurales entre salud pública y privada.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center gap-2">
            <BookOpen size={24}/> 1.1 Propósito y Sentido Transformador
          </h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            La planificación estratégica en salud no es un simple trámite administrativo; es una <strong>función directiva esencial</strong>. A diferencia de otros sectores donde se maximiza la rentabilidad, aquí se busca articular visión, recursos y legitimidad social para impactar en la vida y dignidad de las personas.
          </p>
          <div className="bg-teal-50 p-5 rounded-lg border-l-4 border-teal-500 shadow-sm">
            <strong className="text-teal-900 block mb-2">¿Por qué es crítica? (Cap. 1.2)</strong>
            <ul className="list-disc list-inside text-sm text-teal-800 space-y-2">
              <li><strong>Priorización:</strong> Define el uso racional de recursos escasos ante demandas infinitas (listas de espera).</li>
              <li><strong>Gobernanza:</strong> Alinea a estamentos médicos, administrativos y técnicos bajo un proyecto común.</li>
              <li><strong>Resiliencia:</strong> Permite anticipar crisis sanitarias y cambios epidemiológicos.</li>
              <li><strong>Distinción:</strong> Permite separar lo urgente (operativo) de lo importante (estratégico).</li>
            </ul>
          </div>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h4 className="font-bold text-lg mb-6 text-slate-800 border-b pb-2 flex items-center gap-2">
            <Scale size={20}/> 1.3 Diferencias Estructurales: Público vs. Privado
          </h4>
          <p className="text-sm text-slate-600 mb-4">Aunque comparten desafíos clínicos, sus lógicas institucionales difieren:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-700">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                <tr>
                  <th className="px-4 py-3">Dimensión</th>
                  <th className="px-4 py-3 text-blue-800 bg-blue-50">Hospital Público</th>
                  <th className="px-4 py-3 text-indigo-800 bg-indigo-50">Clínica Privada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Naturaleza</td>
                  <td className="px-4 py-3">Servicio Público, red estatal (SSV).</td>
                  <td className="px-4 py-3">Derecho privado, holding o sociedad.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Propósito</td>
                  <td className="px-4 py-3">Bien común, equidad, mandato legal.</td>
                  <td className="px-4 py-3">Sostenibilidad, competitividad, valor.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Financiamiento</td>
                  <td className="px-4 py-3">Rigidez presupuestaria (DIPRES).</td>
                  <td className="px-4 py-3">Venta de servicios, eficiencia de costos.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Gobernanza</td>
                  <td className="px-4 py-3">Jerárquica, políticamente mediada.</td>
                  <td className="px-4 py-3">Corporativa, directorios ágiles.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 1,
        question: "¿Cuál es una diferencia clave en la gobernanza entre hospitales públicos y privados?",
        options: ["Los privados no tienen directores médicos.", "Los públicos tienen autonomía financiera total.", "Los públicos dependen jerárquicamente del Servicio de Salud.", "Los privados se rigen por el Estatuto Administrativo."],
        correctAnswer: 2,
        explanation: "Correcto. La gobernanza pública es jerárquica e integrada a la red estatal (Cap. 1.3.2), limitando su autonomía comparada con los privados."
      }
    ]
  },
  {
    id: 'cap2',
    title: '2. Marco Conceptual',
    description: 'Definiciones operativas, principios de gestión moderna y normativa vigente.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Lightbulb size={24}/> 2.1 Definición Operativa</h3>
          <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm italic text-slate-700 text-lg leading-relaxed">
            "Proceso sistemático, participativo y orientado al futuro, mediante el cual una organización define su misión, prioridades y estrategias... con el propósito de mejorar la calidad, eficiencia, equidad y sostenibilidad."
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4">2.2 Principios de Gestión Moderna</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-white border border-l-4 border-l-teal-500 rounded shadow-sm hover:shadow-md transition">
              <strong className="text-teal-800 block mb-1">1. Valor Clínico-Social</strong>
              <p className="text-slate-600">Transitar de "producir prestaciones" a "lograr resultados en salud" (Value-Based Healthcare).</p>
            </div>
            <div className="p-4 bg-white border border-l-4 border-l-purple-500 rounded shadow-sm hover:shadow-md transition">
              <strong className="text-purple-800 block mb-1">2. Gobernanza Clínica</strong>
              <p className="text-slate-600">Sistema que asegura calidad y seguridad, empoderando a los equipos clínicos en la decisión.</p>
            </div>
            <div className="p-4 bg-white border border-l-4 border-l-orange-500 rounded shadow-sm hover:shadow-md transition">
              <strong className="text-orange-800 block mb-1">3. Articulación en Red</strong>
              <p className="text-slate-600">Hospitales como nodos interconectados (RISS), no islas. Coordinación vital con APS.</p>
            </div>
            <div className="p-4 bg-white border border-l-4 border-l-blue-500 rounded shadow-sm hover:shadow-md transition">
              <strong className="text-blue-800 block mb-1">4. Gestión Integrada</strong>
              <p className="text-slate-600">Alineación total entre lo clínico, financiero, tecnológico y humano.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Landmark size={24}/> 2.4 Marco Normativo (Chile)</h3>
          <div className="bg-slate-50 p-4 rounded-lg">
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 text-slate-400"/> <span><strong>Constitución (Art 19 n°9):</strong> Base del derecho a la protección de la salud.</span></li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 text-slate-400"/> <span><strong>Ley 19.937:</strong> Autoridad Sanitaria y gestión de redes (define roles de SSV y Hospitales).</span></li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 text-slate-400"/> <span><strong>Ley 20.584:</strong> Derechos y Deberes de los pacientes (marco ético obligatorio).</span></li>
              <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-1 text-slate-400"/> <span><strong>Estrategia Nacional de Salud (ENS) 2021-2030:</strong> Objetivos sanitarios país que guían a los hospitales.</span></li>
            </ul>
          </div>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 2,
        question: "¿Qué implica el principio de 'Gobernanza Clínica'?",
        options: ["Solo los médicos pueden dirigir.", "Enfoque administrativo puro.", "Asegurar calidad y seguridad empoderando equipos clínicos.", "Maximizar utilidades financieras."],
        correctAnswer: 2,
        explanation: "La gobernanza clínica busca asegurar altos estándares de atención mediante el liderazgo distribuido de los equipos de salud, no solo administrativos (Cap. 2.2)."
      }
    ]
  },
  {
    id: 'cap3',
    title: '3. Metodología General',
    description: 'El ciclo de la planificación estratégica: fases, herramientas y participación.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><RefreshCw size={24}/> 3.1 Ciclo de Planificación</h3>
          <p className="mb-6 text-sm text-slate-600 bg-white p-3 rounded border border-slate-100 shadow-sm">
            El proceso no es lineal, es <strong>iterativo, sistémico y adaptativo</strong>. Se compone de 6 fases críticas:
          </p>
          <div className="relative border-l-4 border-teal-200 ml-4 space-y-6 pl-6 py-2">
            {[
              {step: "1. Preparación", desc: "Definición del encuadre, conformación del equipo motor y mandato institucional."},
              {step: "2. Diagnóstico", desc: "Análisis interno (FODA) y externo (PESTEL). Levantamiento de brechas."},
              {step: "3. Definición Estratégica", desc: "Construcción de Misión, Visión y Valores compartidos."},
              {step: "4. Formulación", desc: "Diseño de Objetivos Estratégicos y Líneas de Acción."},
              {step: "5. Implementación", desc: "Gestión del cambio, liderazgo y asignación de recursos."},
              {step: "6. Evaluación", desc: "Monitoreo de KPI, retroalimentación y aprendizaje continuo."}
            ].map((f, i) => (
              <div key={i} className="relative group">
                <span className="absolute -left-[39px] top-0 bg-teal-100 text-teal-800 w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs border-2 border-white shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-colors">{i + 1}</span>
                <h4 className="font-bold text-teal-900">{f.step}</h4>
                <p className="text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Users size={24}/> 3.3 Participación y Gobernanza</h3>
          <div className="bg-amber-50 p-5 rounded-lg text-sm text-amber-900 border border-amber-100">
            <strong className="block mb-2 flex items-center gap-2"><AlertTriangle size={16}/> Condición de Éxito</strong>
            Una planificación sin participación es letra muerta.
            <ul className="list-disc list-inside mt-3 space-y-1 text-amber-800">
              <li><strong>Representatividad:</strong> Incluir clínicos, administrativos y comunidad usuaria.</li>
              <li><strong>Facilitación:</strong> Uso de metodologías ágiles y escucha activa para evitar sesgos.</li>
              <li><strong>Gobernanza:</strong> Crear un Comité Estratégico que valide y sostenga el proceso.</li>
            </ul>
          </div>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 3,
        question: "¿Cuál es la primera fase del ciclo de planificación estratégica, antes del diagnóstico?",
        options: ["Definición de Misión", "Preparación y Encuadre", "Formulación de Objetivos", "Análisis FODA"],
        correctAnswer: 1,
        explanation: "Antes de diagnosticar, es crucial establecer las condiciones: equipo, mandato y alcance del proceso (Cap. 3.1)."
      }
    ]
  },
  {
    id: 'cap4',
    title: '4. Diagnóstico Estratégico',
    description: 'Caracterización, análisis PESTEL, FODA, Brechas Críticas y Stakeholders.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <div className="bg-slate-800 text-white p-4 rounded-lg shadow-md mb-6 italic text-center">
          "Conocer las entrañas de la organización para navegar aguas turbulentas."
        </div>
        
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Search size={24}/> Análisis Dual</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-teal-200 rounded-lg bg-teal-50/50 p-5 hover:bg-teal-50 transition">
              <h4 className="font-bold text-lg text-teal-900 mb-3 border-b border-teal-200 pb-2">Entorno Interno</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><strong>Gobernanza:</strong> Claridad de roles y estructura.</li>
                <li><strong>RRHH:</strong> Clima, competencias, burnout, rotación.</li>
                <li><strong>Procesos:</strong> Flujos de pacientes, cuellos de botella.</li>
                <li><strong>Finanzas:</strong> Eficiencia del gasto y deuda.</li>
              </ul>
            </div>
            
            <div className="border border-indigo-200 rounded-lg bg-indigo-50/50 p-5 hover:bg-indigo-50 transition">
              <h4 className="font-bold text-lg text-indigo-900 mb-3 border-b border-indigo-200 pb-2">Entorno Externo (PESTEL)</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white p-2 rounded shadow-sm"><strong>P</strong>olítico: Reformas.</div>
                <div className="bg-white p-2 rounded shadow-sm"><strong>E</strong>conómico: Inflación.</div>
                <div className="bg-white p-2 rounded shadow-sm"><strong>S</strong>ocial: Demandas.</div>
                <div className="bg-white p-2 rounded shadow-sm"><strong>T</strong>ecnológico: IA/Telemedicina.</div>
                <div className="bg-white p-2 rounded shadow-sm"><strong>E</strong>cológico: Clima.</div>
                <div className="bg-white p-2 rounded shadow-sm"><strong>L</strong>egal: Normativas.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500 shadow-sm flex gap-4">
            <AlertTriangle className="text-red-600 shrink-0 mt-1" size={24}/>
            <div>
              <h5 className="font-bold text-red-900 mb-1">Concepto Clave: Brecha Crítica</h5>
              <p className="text-sm text-red-800 leading-relaxed">
                No es cualquier problema. Es una diferencia <strong>significativa, sostenida y estructural</strong> entre la situación actual y el estándar necesario para cumplir la misión.
                <br/><span className="italic opacity-80">Ejemplo: "Lista de espera quirúrgica de 2 años vs estándar de 6 meses."</span>
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 shadow-sm flex gap-4">
            <Users className="text-blue-600 shrink-0 mt-1" size={24}/>
            <div>
              <h5 className="font-bold text-blue-900 mb-1">Análisis de Actores (Modelo de Gardner)</h5>
              <p className="text-sm text-blue-800 mb-2">Clasificación según Poder e Interés:</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-blue-900">
                <div className="bg-white/50 p-1 rounded"><strong>Promotores:</strong> Alto Poder / Alto Interés.</div>
                <div className="bg-white/50 p-1 rounded"><strong>Latentes:</strong> Alto Poder / Bajo Interés.</div>
                <div className="bg-white/50 p-1 rounded"><strong>Defensores:</strong> Bajo Poder / Alto Interés.</div>
                <div className="bg-white/50 p-1 rounded"><strong>Apatéticos:</strong> Bajo Poder / Bajo Interés.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 4,
        question: "En el análisis PESTEL, ¿dónde clasificarías la Ley de Fármacos II?",
        options: ["Tecnológico", "Legal", "Económico", "Ambiental"],
        correctAnswer: 1,
        explanation: "Es un factor Legal que obliga a cambios normativos y de procesos en la institución (Cap. 4.2)."
      }
    ]
  },
  {
    id: 'cap5',
    title: '5. Formulación Estratégica',
    description: 'Definición de Misión, Visión, Valores, Objetivos SMART y Priorización.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=2000',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Target size={24}/> 5.1 La Tríada Identitaria</h3>
          <div className="grid gap-4 text-sm">
            <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
              <strong className="text-teal-700 text-lg block mb-1">Misión (Propósito)</strong>
              <p className="text-slate-600">¿Quiénes somos y a quién servimos? Debe incluir el propósito sanitario, la población objetivo y el marco ético.</p>
            </div>
            <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
              <strong className="text-teal-700 text-lg block mb-1">Visión (Futuro)</strong>
              <p className="text-slate-600">¿Qué queremos ser? Imagen a 5-10 años, debe ser transformadora, inspiradora y alcanzable.</p>
            </div>
            <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
              <strong className="text-teal-700 text-lg block mb-1">Valores (Conducta)</strong>
              <p className="text-slate-600">Principios ético-operativos que guían la toma de decisiones (ej. Calidad, Dignidad, Transparencia).</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Compass size={24}/> 5.2 Objetivos SMART</h3>
          <p className="text-sm text-slate-600 mb-3">Los objetivos transforman la intención en acción medible:</p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full font-bold">Specific</span>
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full font-bold">Measurable</span>
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full font-bold">Achievable</span>
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full font-bold">Relevant</span>
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full font-bold">Time-bound</span>
          </div>
          <div className="mt-4 p-4 bg-slate-100 rounded text-xs text-slate-600 font-mono">
            Incorrecto: "Mejorar la urgencia."<br/>
            Correcto: "Reducir el tiempo de espera en Triage a menos de 30 min en 12 meses."
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><GitMerge size={24}/> 5.3 Priorización</h3>
          <p className="text-sm text-slate-600 mb-3">Los recursos son finitos. Se debe elegir qué batallas pelear:</p>
          <ul className="list-disc list-inside text-sm text-teal-800 space-y-2">
            <li><strong>Matriz Impacto vs Factibilidad:</strong> Descartar lo de "Alto esfuerzo y Bajo impacto". Priorizar "Quick Wins" (Bajo esfuerzo, Alto impacto).</li>
            <li><strong>Método Hanlon:</strong> Fórmula matemática que pondera (Magnitud + Severidad) x Eficacia x Factibilidad.</li>
          </ul>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 5,
        question: "¿Qué característica SMART falta en este objetivo: 'Mejorar considerablemente la atención de urgencia'?",
        options: ["Específico", "Medible y Temporal", "Relevante", "Alcanzable"],
        correctAnswer: 1,
        explanation: "Es ambiguo. No dice 'cuánto' mejorar (Medible) ni 'cuándo' lograrlo (Temporal). Es solo un deseo (Cap. 5.2)."
      }
    ]
  },
  {
    id: 'cap6',
    title: '6. Plan Operativo Estratégico (POE)',
    description: 'Traducción anual de la estrategia, cronogramas y gestión de recursos.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><FileText size={24}/> 6.1 Del Horizonte al Terreno</h3>
          <p className="text-sm text-slate-600 mb-4">
            El POE es la herramienta que evita que el plan estratégico sea un documento "de biblioteca". Descompone la estrategia en ciclos anuales ejecutables.
          </p>
          <table className="w-full text-xs text-left border rounded-lg overflow-hidden">
            <thead className="bg-slate-800 text-white font-bold">
              <tr><th className="p-3">Nivel</th><th className="p-3">Horizonte</th><th className="p-3">Función</th></tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b"><td className="p-3">Estratégico</td><td className="p-3">3-5 años</td><td className="p-3">Define Rumbo</td></tr>
              <tr className="border-b"><td className="p-3">Táctico</td><td className="p-3">2-3 años</td><td className="p-3">Organiza decisiones</td></tr>
              <tr className="bg-teal-50"><td className="p-3 font-bold text-teal-800">Operativo (POE)</td><td className="p-3 font-bold text-teal-800">1 año</td><td className="p-3 font-bold text-teal-800">Ejecuta y monitorea</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><PieChart size={24}/> 6.4 Gestión de Recursos</h3>
          <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
            <p className="text-sm text-orange-900 mb-4 font-medium">No basta con pedir presupuesto. Se deben gestionar cuatro tipos de recursos:</p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3 rounded border border-orange-200 shadow-sm">
                <strong className="block text-orange-800 mb-1">1. Humanos</strong>
                Perfiles, cargas de trabajo, competencias.
              </div>
              <div className="bg-white p-3 rounded border border-orange-200 shadow-sm">
                <strong className="block text-orange-800 mb-1">2. Financieros</strong>
                Inversión, gasto corriente, flujo de caja.
              </div>
              <div className="bg-white p-3 rounded border border-orange-200 shadow-sm">
                <strong className="block text-orange-800 mb-1">3. Tecnológicos</strong>
                Software, equipos, conectividad.
              </div>
              <div className="bg-white p-3 rounded border border-orange-200 shadow-sm">
                <strong className="block text-orange-800 mb-1">4. Relacionales</strong>
                Convenios, redes, acuerdos políticos.
              </div>
            </div>
          </div>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 6,
        question: "¿Cuál es el horizonte temporal típico de un Plan Operativo (POE)?",
        options: ["5 años", "1 año", "10 años", "Semestral"],
        correctAnswer: 1,
        explanation: "El POE es la bajada anual de la estrategia, alineada con el ciclo presupuestario (Cap. 6.1)."
      }
    ]
  },
  {
    id: 'cap7',
    title: '7. Implementación',
    description: 'Modelos de gobernanza, liderazgo estratégico y gestión del cambio.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Landmark size={24}/> 7.1 Gobernanza Hospitalaria</h3>
          <p className="text-sm text-slate-600 mb-4">La implementación falla sin una estructura de decisión clara. En salud es compleja por la tensión entre la jerarquía administrativa y la autonomía clínica.</p>
          <div className="bg-white p-4 border rounded-lg shadow-sm">
            <strong className="text-slate-800 block mb-2">Modelos Típicos:</strong>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li><strong>Jerárquico:</strong> Basado en el control y la norma.</li>
              <li><strong>Colegiado:</strong> Basado en la participación (Consejos Técnicos).</li>
              <li><strong>Híbrido:</strong> El más común, mezcla líneas de mando con comités asesores.</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><RefreshCw size={24}/> 7.3 Gestión del Cambio (Modelo Kotter)</h3>
          <p className="text-sm text-slate-600 mb-4">Transformar la cultura institucional requiere método:</p>
          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
            <ol className="list-decimal list-inside text-sm space-y-2 text-indigo-900 font-medium">
              <li>Crear sentido de <strong>urgencia</strong> (¿por qué cambiar ahora?).</li>
              <li>Construir una <strong>coalición guía</strong> (líderes formales e informales).</li>
              <li>Desarrollar una <strong>visión clara</strong>.</li>
              <li><strong>Comunicar</strong> la visión masivamente.</li>
              <li><strong>Empoderar</strong> a los equipos para eliminar obstáculos.</li>
              <li>Generar <strong>victorias a corto plazo</strong> (Quick Wins).</li>
              <li>Consolidar mejoras y producir más cambio.</li>
              <li><strong>Anclar</strong> los cambios en la cultura.</li>
            </ol>
          </div>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 7,
        question: "Según el modelo de Kotter, ¿cuál es el primer paso crítico para gestionar el cambio?",
        options: ["Comunicar la visión", "Crear sentido de urgencia", "Consolidar mejoras", "Formar equipos"],
        correctAnswer: 1,
        explanation: "Sin un sentido de urgencia real que saque a la organización de la inercia, ningún esfuerzo posterior prosperará (Cap. 7.3)."
      }
    ]
  },
  {
    id: 'cap8',
    title: '8. Monitoreo y Evaluación',
    description: 'Indicadores (KPI), periodicidad y sistemas de retroalimentación.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Activity size={24}/> 8.1 Indicadores (KPI)</h3>
          <p className="text-sm text-slate-600 mb-4 italic">"Lo que no se mide, no se puede gestionar".</p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-4 border-l-4 border-purple-500 rounded shadow-sm">
              <strong className="text-purple-800 text-base">De Proceso</strong>
              <p className="text-slate-600 mt-1">Miden la ejecución de actividades. <br/><em>Ej: % de funcionarios capacitados.</em></p>
            </div>
            <div className="bg-white p-4 border-l-4 border-blue-500 rounded shadow-sm">
              <strong className="text-blue-800 text-base">De Resultado</strong>
              <p className="text-slate-600 mt-1">Miden logros directos. <br/><em>Ej: Reducción de días de espera.</em></p>
            </div>
            <div className="bg-white p-4 border-l-4 border-green-500 rounded shadow-sm">
              <strong className="text-green-800 text-base">De Impacto</strong>
              <p className="text-slate-600 mt-1">Miden efectos a largo plazo en salud. <br/><em>Ej: Disminución de mortalidad materna.</em></p>
            </div>
            <div className="bg-white p-4 border-l-4 border-orange-500 rounded shadow-sm">
              <strong className="text-orange-800 text-base">De Eficiencia</strong>
              <p className="text-slate-600 mt-1">Relación recursos/logros. <br/><em>Ej: Costo promedio por cama/día.</em></p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><RefreshCw size={24}/> 8.3 Retroalimentación</h3>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="text-sm text-slate-700 leading-relaxed">
              El informe de evaluación no es el fin del proceso. Debe ser un "artefacto de gobernanza" que active decisiones correctivas. 
              Se recomienda usar <strong>tableros visuales (semáforos)</strong> y establecer reuniones trimestrales de revisión.
            </p>
          </div>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 8,
        question: "¿Qué tipo de indicador mide cambios estructurales profundos, como la salud poblacional?",
        options: ["Indicador de Proceso", "Indicador de Eficiencia", "Indicador de Impacto", "Indicador de Satisfacción"],
        correctAnswer: 2,
        explanation: "El impacto refleja el fin último de la intervención (ej. reducir mortalidad), a diferencia de los resultados inmediatos o procesos (Cap. 8.1)."
      }
    ]
  },
  {
    id: 'cap9',
    title: '9. Herramientas de Apoyo',
    description: 'Balanced Scorecard (BSC) adaptado a Salud, Checklists y Talleres.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><BarChart2 size={24}/> 9.3 Balanced Scorecard (BSC) en Salud</h3>
          <p className="text-sm text-slate-600 mb-4">Adaptación del modelo de Kaplan & Norton. En salud, se recomienda agregar una <strong>quinta perspectiva</strong>:</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded shadow-sm">
              <span className="bg-slate-200 text-slate-700 w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs">1</span>
              <span><strong>Financiera:</strong> Sostenibilidad y eficiencia.</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded shadow-sm">
              <span className="bg-slate-200 text-slate-700 w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs">2</span>
              <span><strong>Usuarios/Pacientes:</strong> Satisfacción y acceso.</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded shadow-sm">
              <span className="bg-slate-200 text-slate-700 w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs">3</span>
              <span><strong>Procesos Internos:</strong> Calidad y seguridad clínica.</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded shadow-sm">
              <span className="bg-slate-200 text-slate-700 w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs">4</span>
              <span><strong>Aprendizaje:</strong> Capital humano y tecnología.</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-teal-50 border border-teal-200 rounded shadow-sm">
              <span className="bg-teal-600 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs">5</span>
              <span className="text-teal-800"><strong>Valor Social / Salud Pública:</strong> Impacto sanitario en la población.</span>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><FileText size={24}/> 9.4 Checklists y Talleres</h3>
          <p className="text-sm text-slate-600">Herramientas operativas esenciales para asegurar que la planificación no dependa solo de la memoria y para fomentar la co-creación con los equipos.</p>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 9,
        question: "¿Qué perspectiva es distintiva del BSC adaptado a salud pública?",
        options: ["Financiera", "Valor Social / Salud Pública", "Procesos Internos", "Clientes"],
        correctAnswer: 1,
        explanation: "La perspectiva de Valor Social mide el impacto final en la salud de la población, que es el propósito último del sector público, más allá de lo financiero (Cap. 9.3)."
      }
    ]
  },
  {
    id: 'cap10',
    title: '10. Consideraciones Diferenciadas',
    description: 'Profundización en las lógicas de gestión pública y privada.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053',
    content: (
      <div className="space-y-8">
        <p className="text-slate-600 mb-6 text-sm">Aunque la metodología base es similar, las restricciones y motores de cada sector son distintos.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-200 shadow-sm">
            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2 border-b border-blue-200 pb-2"><Building2 size={20}/> 10.1 Instituciones Públicas</h4>
            <ul className="text-sm space-y-3 text-blue-800">
              <li><strong>Mandato:</strong> Garantizar derechos constitucionales (Ley 19.937).</li>
              <li><strong>Red:</strong> Articulación obligatoria con APS y niveles de complejidad.</li>
              <li><strong>Restricciones:</strong> Rigidez presupuestaria extrema y compras públicas reguladas.</li>
              <li><strong>Oportunidad:</strong> Capacidad de impacto poblacional masivo.</li>
            </ul>
          </div>
          
          <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-200 shadow-sm">
            <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2 border-b border-indigo-200 pb-2"><Activity size={20}/> 10.2 Instituciones Privadas</h4>
            <ul className="text-sm space-y-3 text-indigo-800">
              <li><strong>Lógica:</strong> Mercado regulado y libre elección.</li>
              <li><strong>Foco:</strong> Experiencia usuaria, fidelización, marca y eficiencia.</li>
              <li><strong>Flexibilidad:</strong> Mayor agilidad en inversiones, contratación e innovación.</li>
              <li><strong>Desafío:</strong> Conciliar rentabilidad económica con ética clínica.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    quiz: [
      {
        id: 10,
        question: "¿Cuál es una restricción estructural clave en la planificación de hospitales públicos?",
        options: ["Falta de pacientes", "Rigidez presupuestaria", "Ausencia de normativas", "Exceso de autonomía"],
        correctAnswer: 1,
        explanation: "La dependencia de presupuestos anuales fijados centralmente (DIPRES) limita la flexibilidad para reasignar recursos rápidamente (Cap. 10.1)."
      }
    ]
  },
  {
    id: 'cap11',
    title: '11. Conclusiones y Resiliencia',
    description: 'Sostenibilidad, resiliencia ante crisis y recomendaciones finales.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><ShieldAlert size={24}/> 11.3 Resiliencia en Crisis</h3>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-sm">
            <p className="text-sm text-green-900 italic mb-4 font-medium">"La capacidad de absorber el shock, reorganizarse y seguir funcionando."</p>
            <div className="grid gap-3 text-sm text-green-800">
              <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div><strong>Absorción:</strong> Mantener operaciones críticas durante el evento.</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div><strong>Adaptación:</strong> Reorganizar recursos rápidamente (ej. camas UCI en pandemia).</div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div><strong>Transformación:</strong> Aprender de la crisis para mejorar estructuralmente.</div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><CheckCircle size={24}/> 11.2 Sostenibilidad</h3>
          <p className="text-sm text-slate-600 mb-4">Para que la estrategia no muera en el papel:</p>
          <ul className="list-disc list-inside text-sm text-slate-700 bg-white p-4 rounded border border-slate-200">
            <li><strong>Institucionalizar:</strong> Convertir el ciclo en rutina anual.</li>
            <li><strong>Trazabilidad:</strong> Documentar decisiones para no depender de la memoria de las personas.</li>
            <li><strong>Capacidad Interna:</strong> Formar equipos propios, no depender siempre de consultores externos.</li>
          </ul>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 11,
        question: "¿Qué implica la 'capacidad de adaptación' en la resiliencia hospitalaria?",
        options: ["Resistir sin cambiar nada", "Cerrar el hospital", "Reorganizar recursos y funciones según el nuevo contexto", "Esperar instrucciones centrales"],
        correctAnswer: 2,
        explanation: "La adaptación implica flexibilidad operativa para modificar flujos y recursos ante la emergencia, como convertir pabellones en UCIs (Cap. 11.3)."
      }
    ]
  }
];
