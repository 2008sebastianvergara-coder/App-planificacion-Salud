
import React from 'react';
import { Chapter } from './types';
import { 
  BookOpen, Target, Scale, RefreshCw, Search, AlertTriangle, Users, 
  Compass, FileText, Landmark, Activity, BarChart2, Building2, 
  ShieldAlert, CheckCircle, Lightbulb, GitMerge, PieChart, Layers, 
  List, ArrowRight, HeartPulse, Stethoscope, Microscope, Siren,
  Clock, Database, Globe, Briefcase, Zap
} from 'lucide-react';

export const KPI_DATABASE = [
  { id: 1, text: "Costo promedio por egreso hospitalario", perspective: "Financiera", type: "Eficiencia", explanation: "Mide la eficiencia del gasto (Cap. 9.3.1)." },
  { id: 2, text: "Porcentaje de ejecución presupuestaria anual", perspective: "Financiera", type: "Resultado", explanation: "Clave en hospitales públicos para evitar subejecución (Cap. 10.1)." },
  { id: 3, text: "Ingreso por cama ocupada por día (ICOD)", perspective: "Financiera", type: "Eficiencia", explanation: "Indicador típico de rentabilidad en clínicas privadas (Cap. 10.2)." },
  { id: 4, text: "Gasto de bolsillo promedio por usuario", perspective: "Financiera", type: "Impacto", explanation: "Mide la protección financiera (Cap. 4.2)." },
  { id: 5, text: "Net Promoter Score (NPS) en Urgencia", perspective: "Usuarios", type: "Satisfacción", explanation: "Mide la lealtad y satisfacción del paciente (Cap. 6.2.2)." },
  { id: 6, text: "Tiempo de espera para primera consulta", perspective: "Usuarios", type: "Acceso", explanation: "Indicador crítico de oportunidad de atención." },
  { id: 7, text: "Porcentaje de reclamos respondidos en 10 días", perspective: "Usuarios", type: "Calidad", explanation: "Estándar de trato digno y respuesta institucional." },
  { id: 8, text: "Tasa de satisfacción con la hotelería", perspective: "Usuarios", type: "Satisfacción", explanation: "Relevante en clínicas para diferenciación." },
  { id: 9, text: "Tasa de suspensión de cirugías electivas", perspective: "Procesos", type: "Eficiencia", explanation: "Refleja fallas en la programación o logística (Cap. 9.3)." },
  { id: 10, text: "Porcentaje de ocupación de pabellones", perspective: "Procesos", type: "Eficiencia", explanation: "Uso de capacidad instalada." },
  { id: 11, text: "Tasa de infecciones intrahospitalarias (IAAS)", perspective: "Procesos", type: "Calidad Clínica", explanation: "Indicador de seguridad del paciente (Cap. 3.4.4)." },
  { id: 12, text: "Días estada promedio por GRD", perspective: "Procesos", type: "Eficiencia", explanation: "Gestión clínica de la hospitalización." },
  { id: 13, text: "Porcentaje de ausentismo laboral por licencia médica", perspective: "Aprendizaje", type: "Clima", explanation: "Refleja salud mental y clima organizacional (Cap. 7.4)." },
  { id: 14, text: "Tasa de rotación de personal de enfermería", perspective: "Aprendizaje", type: "Retención", explanation: "Impacta la continuidad del cuidado." },
  { id: 15, text: "Horas de capacitación por funcionario al año", perspective: "Aprendizaje", type: "Desarrollo", explanation: "Inversión en capital humano." },
  { id: 16, text: "Adherencia a protocolos de lavado de manos", perspective: "Aprendizaje", type: "Cultura", explanation: "Mide cultura de seguridad." },
  { id: 17, text: "Porcentaje de cobertura de vacunación en población objetivo", perspective: "Valor Social", type: "Impacto", explanation: "Específico de salud pública (Cap. 9.3.1)." },
  { id: 18, text: "Tasa de resolución en Atención Primaria", perspective: "Valor Social", type: "Efectividad", explanation: "Capacidad de la red para resolver sin derivar." },
  { id: 19, text: "Disminución de listas de espera GES vencidas", perspective: "Valor Social", type: "Derechos", explanation: "Cumplimiento de garantías legales." },
  { id: 20, text: "Alcance de programas de prevención comunitaria", perspective: "Valor Social", type: "Cobertura", explanation: "Vinculación con el medio." }
];

export const CHAPTERS: Chapter[] = [
  {
    id: 'cap1',
    title: '1. Introducción y Contexto',
    description: 'Fundamentos de la planificación estratégica en el ecosistema de salud.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-10 font-sans">
        <section>
          <h3 className="text-xl font-bold text-teal-800 mb-4 border-b border-teal-100 pb-2">1.1 Propósito</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            La planificación estratégica en salud no es una herramienta de gestión técnica neutra; es una <strong>función directiva esencial</strong>. Su propósito es articular visión, acción colectiva, recursos y legitimidad social en sistemas complejos. No busca solo eficiencia, sino <strong>impacto sanitario, equidad y sostenibilidad</strong>.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-teal-800 mb-4 border-b border-teal-100 pb-2">1.2 Importancia</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500">
              <strong className="block text-teal-900 mb-1">Priorización de Recursos</strong>
              <p className="text-sm text-slate-600">Ante demandas infinitas y recursos finitos, define qué es lo urgente y qué es lo importante.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal-500">
              <strong className="block text-teal-900 mb-1">Gobernanza Institucional</strong>
              <p className="text-sm text-slate-600">Alinea a directivos, clínicos y administrativos bajo un proyecto común, reduciendo la fragmentación.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-teal-800 mb-4 border-b border-teal-100 pb-2">1.3 Diferencias Público vs Privado</h3>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">1.3.1 Naturaleza Jurídica</h4>
              <ul className="text-sm space-y-2">
                <li><span className="text-blue-600 font-bold">Público:</span> Parte de la Red Estatal (SSV), mandato de bien común.</li>
                <li><span className="text-indigo-600 font-bold">Privado:</span> Derecho privado, lógica de mercado regulado, sostenibilidad financiera.</li>
              </ul>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h4 className="font-bold text-teal-900 mb-1">1.3.4 Convergencias</h4>
              <p className="text-sm text-teal-800">Ambos sistemas enfrentan los mismos desafíos epidemiológicos. La planificación es el puente para alianzas público-privadas.</p>
            </div>
          </div>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 101,
        question: "La planificación estratégica es solo un trámite administrativo sin impacto real en la salud.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. Es una función directiva esencial para articular visión y recursos, clave para la sostenibilidad y el impacto sanitario (Cap. 1.1)."
      },
      {
        id: 102,
        question: "Los hospitales públicos tienen autonomía financiera total para invertir sus recursos excedentes.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. Dependen de presupuestos asignados centralmente (DIPRES) y tienen rigidez en el gasto (Cap. 1.3.1)."
      },
      {
        id: 103,
        question: "La planificación estratégica permite anticipar crisis sanitarias y dejar de actuar solo reactivamente.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. La resiliencia y anticipación son beneficios clave de una buena planificación para no vivir en 'modo incendio' (Cap. 1.2)."
      }
    ]
  },
  {
    id: 'cap2',
    title: '2. Marco Conceptual',
    description: 'Definiciones, principios de gestión moderna y normativa.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">2.1 Definición</h3>
          <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-400 text-slate-700 italic">
            "Proceso sistemático... con el propósito de mejorar la calidad, eficiencia, equidad y sostenibilidad." (2.1.1)
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">2.2 Principios de Gestión</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <li className="bg-white p-3 rounded border shadow-sm"><strong>1. Valor Clínico-Social:</strong> Resultados relevantes para el paciente.</li>
            <li className="bg-white p-3 rounded border shadow-sm"><strong>2. Gobernanza Clínica:</strong> Decisiones basadas en evidencia.</li>
            <li className="bg-white p-3 rounded border shadow-sm"><strong>3. Articulación en Red:</strong> No somos islas (RISS).</li>
            <li className="bg-white p-3 rounded border shadow-sm"><strong>4. Transparencia:</strong> Rendición de cuentas pública.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">2.4 Normativa</h3>
          <div className="bg-amber-50 p-4 rounded border border-amber-200 text-sm text-amber-900">
            Los planes deben alinearse con la <strong>Estrategia Nacional de Salud (ENS)</strong> y leyes como la 19.937 (Autoridad Sanitaria) y 20.584 (Derechos y Deberes).
          </div>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 201,
        question: "La 'Gobernanza Clínica' implica que solo los médicos toman decisiones financieras.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. Busca asegurar calidad y seguridad empoderando a los equipos clínicos en la gestión, no monopolizar las finanzas (Cap. 2.2)."
      },
      {
        id: 202,
        question: "El principio de integración busca alinear lo clínico, financiero y tecnológico.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. La gestión moderna evita los silos y busca coherencia entre todas las áreas (Cap. 2.2)."
      },
      {
        id: 203,
        question: "La Ley 19.937 es la normativa que regula la Autoridad Sanitaria y la gestión de redes.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Es la base normativa para la articulación de los Servicios de Salud y hospitales (Cap. 2.4)."
      }
    ]
  },
  {
    id: 'cap3',
    title: '3. Metodología General',
    description: 'El ciclo completo de planificación, herramientas y gobernanza.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">3.1 Ciclo de Planificación</h3>
          <p className="text-sm text-slate-600 mb-4">Proceso iterativo de 6 fases:</p>
          <div className="grid gap-2">
            <div className="p-3 bg-white border rounded">1. Preparación y Encuadre</div>
            <div className="p-3 bg-white border rounded">2. Diagnóstico Estratégico</div>
            <div className="p-3 bg-white border rounded">3. Definición Estratégica (Misión/Visión)</div>
            <div className="p-3 bg-white border rounded">4. Formulación (Objetivos)</div>
            <div className="p-3 bg-white border rounded">5. Implementación</div>
            <div className="p-3 bg-white border rounded">6. Evaluación</div>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">3.3 Participación</h3>
          <p className="text-sm text-slate-600">
            Es el factor crítico de éxito. Sin participación de clínicos y usuarios, el plan carece de legitimidad y viabilidad (3.3.1).
          </p>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 301,
        question: "La etapa de 'Diagnóstico' es la primera fase del ciclo de planificación.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. La primera fase es la 'Preparación y Encuadre', donde se define el equipo y el mandato antes de diagnosticar (Cap. 3.1)."
      },
      {
        id: 302,
        question: "La participación de los usuarios y la comunidad es clave para la legitimidad del plan.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Un plan construido a puertas cerradas suele fracasar en su implementación por falta de apoyo social (Cap. 3.3.1)."
      },
      {
        id: 303,
        question: "La evaluación se realiza únicamente al finalizar el ciclo de 5 años.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. El monitoreo y la evaluación deben ser continuos y periódicos para permitir ajustes (Cap. 3.4)."
      }
    ]
  },
  {
    id: 'cap4',
    title: '4. Diagnóstico Estratégico',
    description: 'Caracterización, análisis PESTEL, FODA y Brechas.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">4.2 Entorno Externo (PESTEL)</h3>
          <p className="text-sm text-slate-600">Analiza factores Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales que impactan a la institución.</p>
        </section>
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">4.4 Brechas Críticas</h3>
          <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
            <p className="text-sm text-red-900">
              Diferencia significativa y estructural entre la situación actual y el estándar necesario. No es un problema coyuntural.
            </p>
          </div>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 401,
        question: "Una 'Brecha Crítica' es cualquier problema operativo cotidiano que tiene un hospital.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. Es una diferencia ESTRUCTURAL y SOSTENIDA respecto al estándar necesario, no un problema puntual (Cap. 4.4.1)."
      },
      {
        id: 402,
        question: "El análisis PESTEL se utiliza para evaluar el entorno externo de la organización.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. PESTEL analiza factores Políticos, Económicos, Sociales, etc., que están fuera del control directo (Cap. 4.2)."
      },
      {
        id: 403,
        question: "El análisis de actores (stakeholders) clasifica según Poder e Interés.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Es fundamental para gestionar la viabilidad política de la estrategia (Cap. 4.4.6)."
      }
    ]
  },
  {
    id: 'cap5',
    title: '5. Formulación Estratégica',
    description: 'Misión, Visión, Valores y Objetivos SMART.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=2000',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">5.1 Identidad</h3>
          <ul className="text-sm space-y-2">
            <li><strong>Misión:</strong> Propósito presente. ¿Quiénes somos?</li>
            <li><strong>Visión:</strong> Futuro deseado. ¿Qué queremos ser?</li>
          </ul>
        </section>
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">5.2 Objetivos SMART</h3>
          <p className="text-sm text-slate-600">Deben ser: Específicos, Medibles, Alcanzables, Relevantes y Temporales.</p>
        </section>
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">5.3 Priorización</h3>
          <p className="text-sm text-slate-600">Herramientas: Matriz de Impacto/Factibilidad y Método Hanlon.</p>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 501,
        question: "La Misión define lo que la institución aspira a ser en el futuro (10 años).",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. La 'Misión' define el propósito presente. La 'Visión' es la que proyecta el futuro deseado (Cap. 5.1)."
      },
      {
        id: 502,
        question: "Un objetivo es SMART si tiene un plazo definido (Temporal).",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. La 'T' de SMART se refiere a 'Time-bound' (Temporal), esencial para la evaluabilidad (Cap. 5.2.3)."
      },
      {
        id: 503,
        question: "La matriz de impacto/factibilidad ayuda a priorizar y descartar proyectos de bajo impacto y alto esfuerzo.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Permite concentrar recursos en los 'Quick Wins' y proyectos estratégicos viables (Cap. 5.3)."
      }
    ]
  },
  {
    id: 'cap6',
    title: '6. Plan Operativo (POE)',
    description: 'Traducción anual, cronogramas y recursos.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">6.1 Definición</h3>
          <p className="text-sm text-slate-600">El POE traduce la estrategia a acciones anuales concretas. Su horizonte es de 1 año.</p>
        </section>
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">6.4 Recursos</h3>
          <p className="text-sm text-slate-600">Es vital alinear el POE con el presupuesto (DIPRES en público) y gestionar recursos humanos y tecnológicos.</p>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 601,
        question: "El Plan Operativo Estratégico (POE) tiene un horizonte de planificación de 5 años.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. El POE es anual (1 año), es la bajada táctica inmediata de la estrategia de largo plazo (Cap. 6.1)."
      },
      {
        id: 602,
        question: "Todo plan operativo debe tener asignado un responsable y recursos claros.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Sin responsable ni recursos, una acción es solo un deseo y no se puede ejecutar (Cap. 6.1.3)."
      },
      {
        id: 603,
        question: "Los indicadores de eficiencia relacionan los recursos utilizados con los logros obtenidos.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Miden qué tan bien se utilizan los recursos para alcanzar los resultados (Cap. 6.2)."
      }
    ]
  },
  {
    id: 'cap7',
    title: '7. Implementación',
    description: 'Gobernanza, liderazgo y gestión del cambio.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">7.1 Gobernanza</h3>
          <p className="text-sm text-slate-600">Estructuras formales para tomar decisiones. En hospitales suele ser híbrida (jerárquica + comités).</p>
        </section>
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">7.3 Gestión del Cambio</h3>
          <p className="text-sm text-slate-600">Modelo de Kotter: comienza creando un "Sentido de Urgencia" real.</p>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 701,
        question: "Crear 'Sentido de Urgencia' es el primer paso para gestionar el cambio según Kotter.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Sin urgencia, la inercia organizacional impide el cambio (Cap. 7.3)."
      },
      {
        id: 702,
        question: "La gobernanza híbrida mezcla estructuras jerárquicas con comités participativos.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Es el modelo más común en hospitales modernos para equilibrar control y participación (Cap. 7.1)."
      },
      {
        id: 703,
        question: "La alineación estratégica solo es necesaria para los cargos directivos.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. Es crucial alinear a todo el personal, especialmente a los equipos clínicos que ejecutan la estrategia (Cap. 7.4)."
      }
    ]
  },
  {
    id: 'cap8',
    title: '8. Monitoreo y Evaluación',
    description: 'Indicadores (KPI) y retroalimentación.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">8.1 Indicadores</h3>
          <p className="text-sm text-slate-600">Tipos: Proceso, Resultado, Impacto, Eficiencia. "Lo que no se mide no se gestiona".</p>
        </section>
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">8.3 Retroalimentación</h3>
          <p className="text-sm text-slate-600">El monitoreo debe activar decisiones, no solo generar informes.</p>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 801,
        question: "Los indicadores de impacto miden los efectos a largo plazo en la salud de la población.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Miden el cambio final (ej. mortalidad), a diferencia de los de proceso (Cap. 8.1)."
      },
      {
        id: 802,
        question: "La retroalimentación debe ser punitiva para corregir errores rápidamente.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. Debe estar orientada al aprendizaje y la mejora continua, no al castigo (Cap. 8.3)."
      },
      {
        id: 803,
        question: "Se sugiere realizar evaluaciones tácticas trimestrales para ajustar el rumbo.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Permite corregir desviaciones antes de que sea tarde (Cap. 8.2)."
      }
    ]
  },
  {
    id: 'cap9',
    title: '9. Herramientas de Apoyo',
    description: 'BSC, Checklists y Talleres.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">9.3 BSC en Salud</h3>
          <p className="text-sm text-slate-600">Agrega una quinta perspectiva: <strong>Valor Social / Salud Pública</strong>.</p>
        </section>
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">9.4 Operatividad</h3>
          <p className="text-sm text-slate-600">Checklists para asegurar procesos y talleres para participación.</p>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 901,
        question: "El BSC adaptado a salud pública agrega la perspectiva de 'Valor Social'.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Mide el cumplimiento del mandato sanitario más allá de lo financiero (Cap. 9.3)."
      },
      {
        id: 902,
        question: "Los mapas estratégicos reemplazan la necesidad de realizar un análisis FODA.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. Son herramientas complementarias; el FODA es diagnóstico, el mapa visualiza la estrategia (Cap. 9.1)."
      },
      {
        id: 903,
        question: "Los checklists son útiles para asegurar la ejecución de pasos críticos en la planificación.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Ayudan a ordenar y no olvidar etapas clave del proceso (Cap. 9.4)."
      }
    ]
  },
  {
    id: 'cap10',
    title: '10. Consideraciones Diferenciadas',
    description: 'Público vs. Privado.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">10.1 Público</h3>
          <p className="text-sm text-slate-600">Restricción clave: Rigidez presupuestaria y mandato de derechos.</p>
        </section>
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">10.2 Privado</h3>
          <p className="text-sm text-slate-600">Foco: Experiencia usuaria, fidelización y eficiencia.</p>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 1001,
        question: "La rigidez presupuestaria es una limitación clave en la planificación de hospitales públicos.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Dependen de asignaciones centrales y tienen poco margen de maniobra financiera (Cap. 10.1)."
      },
      {
        id: 1002,
        question: "El sector privado no necesita cumplir con normativas sanitarias nacionales.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. Todos los prestadores deben cumplir con la autoridad sanitaria y la ley (Cap. 10.2)."
      },
      {
        id: 1003,
        question: "La fidelización de pacientes es un desafío estratégico central para las clínicas privadas.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. En un mercado competitivo, la experiencia y lealtad del usuario son claves (Cap. 10.2)."
      }
    ]
  },
  {
    id: 'cap11',
    title: '11. Conclusiones y Resiliencia',
    description: 'Sostenibilidad y Resiliencia.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">11.3 Resiliencia</h3>
          <p className="text-sm text-slate-600">Capacidades: Absorción (resistir), Adaptación (reorganizar), Transformación (aprender).</p>
        </section>
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">11.2 Sostenibilidad</h3>
          <p className="text-sm text-slate-600">Clave: Desarrollar capacidad interna propia, no depender siempre de externos.</p>
        </section>
      </div>
    ),
    quiz: [
      {
        id: 1101,
        question: "La resiliencia hospitalaria incluye la capacidad de transformar y aprender de las crisis.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. No es solo resistir, sino mejorar estructuralmente post-crisis (Cap. 11.3)."
      },
      {
        id: 1102,
        question: "Para ser sostenible, la planificación debe depender siempre de consultores externos.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 1,
        explanation: "Falso. La sostenibilidad requiere desarrollar capacidades internas en los equipos propios (Cap. 11.2)."
      },
      {
        id: 1103,
        question: "La capacidad de adaptación implica reorganizar recursos rápidamente ante una emergencia.",
        options: ["Verdadero", "Falso"],
        correctAnswer: 0,
        explanation: "Verdadero. Es la flexibilidad operativa necesaria en crisis (Cap. 11.3)."
      }
    ]
  }
];
