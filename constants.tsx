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
  CheckCircle2
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
    title: '1. Introducción y Contexto',
    description: 'Propósito, importancia y diferencias estructurales entre salud pública y privada.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053',
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-teal-800">Propósito del Manual</h3>
        <p>La planificación estratégica en salud no es solo una herramienta de gestión técnica; es una función crítica de conducción institucional. Este manual busca ofrecer una herramienta integral para diseñar procesos orientados a resultados clínicos, organizacionales y sociales.</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h4 className="font-bold text-lg mb-4 text-slate-800 border-b pb-2">Diferencias Estructurales (Cap. 1.3 y 10)</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="text-blue-700" size={20}/>
                <span className="font-bold text-blue-800">Hospitales Públicos</span>
              </div>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                <li><strong>Mandato:</strong> Garantizar derecho a la salud y cumplir metas sanitarias nacionales.</li>
                <li><strong>Financiamiento:</strong> Rigidez presupuestaria (DIPRES) y dependencia del Estado.</li>
                <li><strong>Gobernanza:</strong> Jerárquica, compleja y articulada con la Red (Servicio de Salud).</li>
                <li><strong>Foco:</strong> Valor público, equidad y cobertura.</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="text-indigo-700" size={20}/>
                <span className="font-bold text-indigo-800">Clínicas Privadas</span>
              </div>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                <li><strong>Mandato:</strong> Sostenibilidad financiera y competitividad en el mercado.</li>
                <li><strong>Financiamiento:</strong> Autosuficiencia, inversión privada y venta de servicios.</li>
                <li><strong>Gobernanza:</strong> Corporativa (Directorios), más autónoma y flexible.</li>
                <li><strong>Foco:</strong> Rentabilidad, fidelización y experiencia del paciente.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    quiz: [
      {
        id: 1,
        question: "¿Cuál es una diferencia clave en la gobernanza entre hospitales públicos y privados?",
        options: [
          "Los privados no tienen directores.",
          "Los públicos tienen autonomía financiera total.",
          "Los públicos dependen jerárquicamente del Servicio de Salud y normativas ministeriales.",
          "Los privados se rigen por el Estatuto Administrativo."
        ],
        correctAnswer: 2,
        explanation: "La gobernanza pública es jerárquica y está integrada a la red estatal, mientras que la privada es corporativa y autónoma."
      }
    ]
  },
  {
    id: 'diagnostico',
    title: '2. Diagnóstico Estratégico',
    description: 'Análisis interno, externo y definición de Brechas Críticas.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-6">
        <p>El diagnóstico estratégico combina el análisis de la organización con el del entorno para identificar dónde estamos realmente.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Search className="text-teal-600" />
              <h4 className="font-bold text-lg">Análisis Interno (Fortalezas/Debilidades)</h4>
            </div>
            <p className="text-sm text-slate-600 mb-2">Se deben revisar dimensiones como:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
              <li>Gobernanza y estructura.</li>
              <li>Recursos humanos y clima laboral.</li>
              <li>Procesos clínicos y flujos de pacientes.</li>
              <li>Situación financiera y tecnológica.</li>
            </ul>
          </div>
          
          <div className="border p-4 rounded-lg bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Target className="text-indigo-600" />
              <h4 className="font-bold text-lg">Análisis Externo (PESTEL)</h4>
            </div>
            <p className="text-sm text-slate-600 mb-2">Factores que no controlamos pero nos afectan:</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li><span className="font-bold text-indigo-700">P</span>olítico (Reformas, cambios de gobierno)</li>
              <li><span className="font-bold text-indigo-700">E</span>conómico (Presupuesto, inflación)</li>
              <li><span className="font-bold text-indigo-700">S</span>ocial (Envejecimiento, demandas)</li>
              <li><span className="font-bold text-indigo-700">T</span>ecnológico (Digitalización, IA)</li>
              <li><span className="font-bold text-indigo-700">E</span>cológico (Cambio climático, residuos)</li>
              <li><span className="font-bold text-indigo-700">L</span>egal (Normativas, derechos paciente)</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
          <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
            <AlertTriangle size={18}/> Concepto Clave: Brecha Crítica
          </h4>
          <p className="text-sm text-amber-800">
            Una brecha crítica se define como una <strong>diferencia significativa, sostenida y estructural</strong> entre la situación actual de la institución y el estándar mínimo necesario para cumplir con su misión. No es solo un problema puntual, es un déficit estratégico.
          </p>
        </div>
      </div>
    ),
    quiz: [
      {
        id: 2,
        question: "¿Qué herramienta se utiliza para el análisis del entorno MACRO externo?",
        options: ["Diagrama de Flujo", "Análisis PESTEL", "Organigrama", "Entrevistas internas"],
        correctAnswer: 1,
        explanation: "PESTEL analiza factores Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales externos a la organización."
      }
    ]
  },
  {
    id: 'formulacion',
    title: '3. Formulación Estratégica',
    description: 'Definiendo Misión, Visión y Objetivos SMART.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=2000',
    content: (
      <div className="space-y-6">
        <p>La formulación traduce la identidad y el diagnóstico en un rumbo claro. Es el "núcleo ético-político" de la estrategia.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-bold text-teal-800 mb-3 text-lg">Componentes de la Misión (Cap. 5.1)</h4>
            <ul className="grid md:grid-cols-2 gap-3 text-sm">
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-500 shrink-0"/> <span><strong>Propósito sanitario:</strong> ¿Qué salud entregamos?</span></li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-500 shrink-0"/> <span><strong>Población objetivo:</strong> ¿A quién servimos?</span></li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-500 shrink-0"/> <span><strong>Diferenciación:</strong> ¿Qué nos hace únicos?</span></li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-teal-500 shrink-0"/> <span><strong>Marco ético:</strong> Valores y principios.</span></li>
            </ul>
          </div>

          <div className="bg-slate-100 p-5 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-3">Objetivos Estratégicos SMART</h4>
            <p className="text-sm text-slate-600 mb-4">Los objetivos deben operacionalizar el rumbo. No basta con "mejorar la calidad", debe ser medible.</p>
            <div className="grid grid-cols-5 gap-2 text-center text-xs font-bold text-white">
              <div className="bg-blue-500 p-2 rounded">S<br/><span className="font-normal opacity-90">Específico</span></div>
              <div className="bg-blue-600 p-2 rounded">M<br/><span className="font-normal opacity-90">Medible</span></div>
              <div className="bg-blue-700 p-2 rounded">A<br/><span className="font-normal opacity-90">Alcanzable</span></div>
              <div className="bg-blue-800 p-2 rounded">R<br/><span className="font-normal opacity-90">Relevante</span></div>
              <div className="bg-blue-900 p-2 rounded">T<br/><span className="font-normal opacity-90">Temporal</span></div>
            </div>
            <div className="mt-4 bg-white p-3 rounded border text-sm text-slate-700 italic">
              <strong>Ejemplo:</strong> "Reducir los tiempos de espera en Urgencia en un 40% (M) en un plazo de 3 años (T), mediante rediseño de flujos (S/A), para mejorar la satisfacción usuaria (R)."
            </div>
          </div>
        </div>
      </div>
    ),
    quiz: [
      {
        id: 3,
        question: "¿Qué característica 'SMART' falta en el objetivo: 'Mejorar la atención de pacientes'?",
        options: ["Es Específico", "Es Medible y Temporal", "Es Relevante", "Es Alcanzable"],
        correctAnswer: 1,
        explanation: "Falta definir CÓMO se mide (Medible) y CUÁNDO se logrará (Temporal). 'Mejorar' es subjetivo."
      }
    ]
  },
  {
    id: 'operativo',
    title: '4. Plan Operativo y BSC',
    description: 'Balanced Scorecard y tipos de Indicadores.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-6">
        <p>El Plan Operativo Estratégico (POE) baja la estrategia al año calendario. Para medirlo, usamos el Balanced Scorecard (BSC) adaptado a salud.</p>
        
        <div className="flex flex-col gap-4">
          <div className="border rounded-lg p-5 bg-blue-50">
            <h4 className="font-bold text-blue-900 mb-3">Perspectivas del BSC en Salud (Cap. 9.3)</h4>
            <p className="text-sm text-blue-800 mb-3">A diferencia del modelo clásico de negocios, en salud se agrega el valor social.</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-center gap-2"><span className="bg-blue-200 px-2 py-0.5 rounded text-xs font-bold">1</span> <strong>Financiera:</strong> Sostenibilidad y eficiencia del gasto.</li>
              <li className="flex items-center gap-2"><span className="bg-blue-200 px-2 py-0.5 rounded text-xs font-bold">2</span> <strong>Usuarios/Pacientes:</strong> Satisfacción, acceso y trato digno.</li>
              <li className="flex items-center gap-2"><span className="bg-blue-200 px-2 py-0.5 rounded text-xs font-bold">3</span> <strong>Procesos Internos:</strong> Calidad clínica, seguridad y gestión.</li>
              <li className="flex items-center gap-2"><span className="bg-blue-200 px-2 py-0.5 rounded text-xs font-bold">4</span> <strong>Aprendizaje:</strong> Capacitación, clima e innovación.</li>
              <li className="flex items-center gap-2"><span className="bg-teal-200 px-2 py-0.5 rounded text-xs font-bold text-teal-900">5</span> <strong>Valor Social / Salud Pública:</strong> Impacto sanitario y aporte a la red.</li>
            </ul>
          </div>

          <div className="border rounded-lg p-5 bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-rose-600">
              <BarChart2 />
              <h4 className="font-bold">Tipos de KPIs (Cap. 6.2)</h4>
            </div>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-xs text-left border-collapse">
                <thead className="bg-slate-100 font-bold">
                  <tr>
                    <th className="p-2 border">Tipo</th>
                    <th className="p-2 border">Definición</th>
                    <th className="p-2 border">Ejemplo</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-2 border font-semibold">Proceso</td>
                    <td className="p-2 border">Miden ejecución de actividades.</td>
                    <td className="p-2 border">% de funcionarios capacitados.</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-semibold">Resultado</td>
                    <td className="p-2 border">Miden logros directos.</td>
                    <td className="p-2 border">Disminución lista de espera.</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-semibold">Impacto</td>
                    <td className="p-2 border">Efectos a largo plazo.</td>
                    <td className="p-2 border">Reducción de mortalidad materna.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    ),
    quiz: [
      {
        id: 4,
        question: "¿Qué perspectiva es distintiva del BSC en instituciones de salud pública según el manual?",
        options: ["Perspectiva de Ventas", "Valor Social / Salud Pública", "Perspectiva Legal", "Perspectiva de Marketing"],
        correctAnswer: 1,
        explanation: "En salud pública, el impacto comunitario y el aporte a la red asistencial son fundamentales y se añaden como una 5ta perspectiva."
      }
    ]
  },
  {
    id: 'implementacion',
    title: '5. Implementación y Cambio',
    description: 'Liderazgo, gobernanza y modelo de Kotter.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000',
    content: (
      <div className="space-y-6">
        <p>La implementación es el momento de la verdad. Requiere gobernanza clara y gestión humana del cambio.</p>
        
        <div className="grid gap-4">
          <div className="p-4 bg-white border rounded shadow-sm">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <Users size={18} /> Gobernanza (Cap. 7.1)
            </h4>
            <p className="text-sm text-slate-600 mt-1">Estructuras formales (Comités, Consejos) para tomar decisiones. Debe transitar de modelos puramente burocráticos a modelos participativos y basados en resultados.</p>
          </div>
          
          <div className="p-4 bg-orange-50 border border-orange-200 rounded">
            <h4 className="font-bold text-orange-800 flex items-center gap-2">
              <Flag size={18} /> Gestión del Cambio (Modelo Kotter)
            </h4>
            <p className="text-sm text-orange-700 mt-2 mb-2">Para mover a la organización se sugieren 8 pasos (Cap. 7.3):</p>
            <ol className="list-decimal list-inside text-sm text-orange-800 font-medium grid grid-cols-2 gap-x-4">
              <li>Crear urgencia</li>
              <li>Formar coalición</li>
              <li>Crear visión</li>
              <li>Comunicar visión</li>
              <li>Empoderar acción</li>
              <li>Victorias cortas</li>
              <li>Consolidar mejoras</li>
              <li>Anclar cultura</li>
            </ol>
          </div>

          <div className="p-4 bg-slate-50 border rounded text-sm text-slate-700">
            <strong>Liderazgo Distribuido:</strong> No basta el Director. Se requiere liderazgo en mandos medios, enfermería y referentes técnicos para permear la estrategia en la operación diaria.
          </div>
        </div>
      </div>
    ),
    quiz: [
      {
        id: 5,
        question: "Según el modelo de Kotter citado en el manual, ¿qué es clave para iniciar el cambio?",
        options: ["Escribir un memo", "Crear sentido de urgencia", "Despedir personal", "Contratar software"],
        correctAnswer: 1,
        explanation: "El primer paso es 'Crear sentido de urgencia' para sacar a la organización de la inercia y motivar la acción."
      }
    ]
  }
];