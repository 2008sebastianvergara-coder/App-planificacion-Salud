
import React from 'react';
import { Chapter } from './types';
import { 
  BookOpen, Target, Scale, RefreshCw, Search, AlertTriangle, Users, 
  Compass, FileText, Landmark, Activity, BarChart2, Building2, 
  ShieldAlert, CheckCircle, Lightbulb, GitMerge, PieChart, Layers, 
  List, ArrowRight, HeartPulse, Stethoscope, Microscope, Siren,
  Clock, Database, Globe, Briefcase, Zap, HelpCircle, Book, Info, AlertOctagon, CheckCircle2
} from 'lucide-react';

// --- COMPONENTES AUXILIARES PARA EL TEXTO ---

const SectionTitle = ({ children }: { children?: React.ReactNode }) => (
  <h3 className="text-2xl font-bold text-teal-900 mt-12 mb-6 border-b-2 border-teal-100 pb-3 flex items-center gap-3">
    {children}
  </h3>
);

const SubSection = ({ title, children }: { title: string, children?: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6 hover:shadow-md transition-shadow">
    <h4 className="font-bold text-slate-800 text-lg mb-4 flex justify-between items-center text-left">
      {title}
      <ArrowRight size={18} className="text-teal-600 shrink-0 ml-2"/>
    </h4>
    <div className="text-slate-600 text-base leading-relaxed">
      {children}
    </div>
  </div>
);

const QuoteBox = ({ text }: { text: string }) => (
  <div className="bg-slate-50 border-l-4 border-teal-500 p-8 my-8 rounded-r-xl shadow-sm">
    <p className="text-slate-700 italic font-medium text-xl leading-relaxed font-serif">"{text}"</p>
  </div>
);

const DefinitionBox = ({ term, def }: { term: string, def: string }) => (
  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded-r-xl shadow-sm">
    <h4 className="font-bold text-amber-900 mb-2 uppercase tracking-wide text-xs flex items-center gap-2">
      <Lightbulb size={16}/> CONCEPTO CLAVE
    </h4>
    <strong className="block text-amber-900 text-lg mb-1">{term}</strong>
    <p className="text-amber-800 text-base leading-relaxed">{def}</p>
  </div>
);

const ComparisonTable = ({ title, publicText, privateText }: { title: string, publicText: string, privateText: string }) => (
  <div className="grid md:grid-cols-2 gap-6 my-8">
    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-black text-blue-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider"><Landmark size={20}/> Sector Público</h4>
      <p className="text-blue-900 text-sm leading-relaxed">{publicText}</p>
    </div>
    <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-black text-purple-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider"><Building2 size={20}/> Sector Privado</h4>
      <p className="text-purple-900 text-sm leading-relaxed">{privateText}</p>
    </div>
  </div>
);

// --- CONTENIDO DETALLADO DE CAPÍTULOS ---

export const CHAPTERS: Chapter[] = [
  {
    id: 'cap1',
    title: '1. Introducción: Propósito y Rol Transformador',
    description: 'La planificación estratégica como función directiva esencial y ética, más allá del trámite administrativo.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070',
    glossary: [
        { term: "Gobernanza Clínica", definition: "Sistema mediante el cual las organizaciones de salud son responsables de mejorar continuamente la calidad de sus servicios y salvaguardar altos estándares de atención." },
        { term: "Autogestión en Red", definition: "Modelo de gestión de hospitales de alta complejidad que les otorga mayor autonomía financiera y administrativa, integrados a la red del Servicio de Salud." },
        { term: "COMGES", definition: "Compromisos de Gestión. Instrumento de evaluación del desempeño en el sector público de salud chileno." },
        { term: "Accountability", definition: "Rendición de cuentas. Obligación de las instituciones de responder por sus decisiones y resultados ante la sociedad y autoridades." },
        { term: "EBITDA", definition: "Indicador financiero (Earnings Before Interest, Taxes, Depreciation, and Amortization) usado en el sector privado para medir la rentabilidad operativa." }
    ],
    fullContent: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">1.1 Propósito</h3>
        <p>El propósito fundamental de este manual es establecer una arquitectura conceptual, metodológica y operativa robusta para la planificación estratégica en el sector salud, concebida no como un ejercicio administrativo estático, sino como una herramienta de gobernanza clínica y organizacional dinámica. En un ecosistema sanitario caracterizado por la incertidumbre, la rápida evolución tecnológica, la transición epidemiológica y las crecientes demandas ciudadanas por derechos y transparencia, la planificación no puede reducirse a un cumplimiento burocrático de normativas. Por el contrario, debe constituirse como la función directiva esencial que permite articular la visión de futuro con la capacidad de ejecución presente.</p>
        <p>Este documento busca dotar a los equipos directivos, jefaturas clínicas, profesionales de la gestión y consejos de desarrollo de herramientas concretas para transformar la intención declarativa en acción sanitaria medible. A diferencia de otros sectores industriales donde la estrategia busca maximizar el retorno financiero, la planificación en salud conlleva una responsabilidad ética intrínseca: las decisiones estratégicas impactan directamente en la calidad de vida, la morbilidad, la mortalidad y la dignidad de las personas. Por tanto, el propósito de esta guía es trascender el "recetario técnico" para ofrecer un instrumento reflexivo y práctico que permita gobernar la complejidad clínica, alineando los recursos financieros (públicos o privados), el talento humano y la infraestructura tecnológica con los imperativos sanitarios del siglo XXI y los Objetivos Sanitarios de la Década.</p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">1.2 Importancia de la planificación estratégica en salud</h3>
        <p>La importancia de la planificación estratégica en salud radica en su capacidad para mitigar la fragmentación, la inercia institucional y la reactividad ante las crisis. Los sistemas de salud, y en particular el sistema chileno, operan bajo una presión asistencial constante —agudizada por listas de espera y emergencias epidemiológicas— que tiende a priorizar sistemáticamente lo urgente sobre lo importante. Sin una estrategia definida y compartida, las instituciones sanitarias corren el riesgo de convertirse en meros administradores de la contingencia, perdiendo la capacidad de conducir su propio desarrollo y de innovar en sus modelos de atención.</p>
        <p>En primer lugar, la planificación estratégica es un imperativo de sostenibilidad financiera y asignación ética de recursos. En un contexto de costos crecientes en tecnología médica, fármacos de alto costo y envejecimiento poblacional, y con presupuestos siempre limitados respecto a la demanda infinita, la estrategia permite priorizar inversiones y racionalizar el gasto.</p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">1.3 Diferencias y similitudes entre hospitales públicos y privados</h3>
        <p><strong>1.3.1. Naturaleza jurídica y lógica de funcionamiento:</strong> La distinción fundamental entre el sector público y privado reside en su mandato de origen, su marco regulatorio y los incentivos que mueven su operación, aunque ambos convergen en el acto sanitario.</p>
        <p>Los hospitales públicos actúan como órganos descentralizados del Estado. Su "cliente" final es la ciudadanía en su conjunto, y su éxito se mide por el impacto en indicadores de salud pública (mortalidad, morbilidad, AVPP) y el cumplimiento de garantías explícitas (GES). Las clínicas privadas, aunque sujetas a fuertes regulaciones técnicas y éticas, operan en un mercado competitivo donde la calidad de servicio, la hotelería y la rapidez de acceso son diferenciadores clave para la captación de demanda solvente o asegurada.</p>
        
        <p><strong>1.3.2. Gobernanza y toma de decisiones estratégicas:</strong> En el sector público, la gobernanza es estructuralmente jerárquica y dependiente de niveles centrales, lo que condiciona los tiempos y alcances de la planificación. En el sector privado, la gobernanza recae en directorios, consejos de administración o gerencias corporativas que responden a accionistas, fundaciones o universidades.</p>
      </div>
    ),
    content: (
      <div className="font-sans text-slate-700 leading-relaxed space-y-6">
        <p className="text-lg">
          El propósito fundamental de este manual es establecer una arquitectura conceptual, metodológica y operativa robusta para la planificación estratégica en el sector salud. No debe concebirse como un ejercicio administrativo estático, sino como una <strong>herramienta de gobernanza clínica y organizacional dinámica</strong>.
        </p>
        
        <SectionTitle>1.1 Propósito Fundamental y Ético</SectionTitle>
        <p>A diferencia de otros sectores industriales donde la estrategia busca maximizar el retorno financiero, la planificación en salud conlleva una <strong>responsabilidad ética intrínseca</strong>: las decisiones estratégicas impactan directamente en la calidad de vida, la morbilidad, la mortalidad y la dignidad de las personas.</p>
        <QuoteBox text="El propósito de esta guía es trascender el 'recetario técnico' para ofrecer un instrumento reflexivo y práctico que permita gobernar la complejidad clínica." />
        
        <SectionTitle>1.3 Diferencias y Similitudes: Público vs. Privado</SectionTitle>
        <p>Aunque ambos convergen en el acto sanitario, sus mandatos y lógicas de operación son distintos:</p>
        
        <ComparisonTable 
          title="Mandato y Regulación"
          publicText="Su mandato es garantizar el derecho constitucional a la salud, la equidad y la cobertura universal. Se rigen por el Derecho Público (DIPRES, Ley 19.937, Estatuto Administrativo)."
          privateText="Su mandato es satisfacer la demanda de salud asegurando sostenibilidad y rentabilidad. Se rigen por el Derecho Privado (Código Sanitario, Código del Trabajo, Ley de Isapres)."
        />
        <ComparisonTable 
          title="Lógica y Gobernanza"
          publicText="Lógica de Rentabilidad Social. Gobernanza jerárquica y dependiente de niveles centrales. Decisiones estratégicas requieren validaciones complejas (Mideso, Gore, Minsal)."
          privateText="Lógica de Sostenibilidad Económica y Competitividad. Gobernanza corporativa (directorios) más ágil, aunque tensionada por resultados financieros a corto plazo (EBITDA)."
        />
      </div>
    ),
    quiz: [
      { id: 101, question: "En salud, la planificación estratégica tiene una responsabilidad ética intrínseca porque sus decisiones afectan la vida y dignidad de las personas.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. A diferencia de otras industrias centradas en el retorno financiero, en salud el impacto es vital y humano." },
      { id: 102, question: "Los hospitales públicos se rigen por el Derecho Privado, lo que les da total autonomía financiera.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Se rigen por el Derecho Público y tienen restricciones presupuestarias y normativas estrictas (DIPRES, Estatuto Administrativo)." },
      { id: 103, question: "La 'Cultura de la Urgencia' favorece la innovación y el desarrollo de largo plazo en las instituciones de salud.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. La cultura de la urgencia hace que se priorice lo inmediato, perdiendo la capacidad de conducir el propio desarrollo e innovar." }
    ]
  },
  {
    id: 'cap2',
    title: '2. Marco Conceptual y Normativo',
    description: 'Definiciones, principios modernos de gestión y la arquitectura legal chilena.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070',
    glossary: [
        { term: "Value-Based Healthcare", definition: "Atención de Salud Basada en Valor. Modelo que busca maximizar los resultados de salud que importan al paciente por cada unidad monetaria gastada." },
        { term: "SIDRA", definition: "Sistemas de Información de Redes Asistenciales. Plataforma tecnológica del MINSAL para la gestión de información clínica." },
        { term: "GRD", definition: "Grupos Relacionados por el Diagnóstico. Sistema de clasificación de pacientes que permite relacionar los tipos de pacientes tratados con los recursos consumidos." },
        { term: "RISS", definition: "Redes Integradas de Servicios de Salud. Modelo de la OPS/OMS que promueve la coordinación entre niveles asistenciales para reducir la fragmentación." },
        { term: "Ley 19.937", definition: "Ley de Autoridad Sanitaria que reorganizó el sistema de salud chileno, separando funciones de rectoría, fiscalización y ejecución." }
    ],
    fullContent: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">2.1 Definición de planificación estratégica en salud</h3>
        <p><strong>2.1.1 Una definición operativa sectorial:</strong> La planificación estratégica en salud se define como el proceso sistemático, participativo, político y técnico mediante el cual una organización sanitaria analiza su situación interna y externa, para tomar decisiones presentes sobre el direccionamiento de sus recursos y capacidades, con el fin de asegurar resultados futuros en salud poblacional, sostenibilidad institucional y satisfacción usuaria. No es un acto de predicción del futuro, sino de preparación para él. Implica la construcción de viabilidad política, técnica y económica para alcanzar objetivos sanitarios en un entorno de alta incertidumbre y complejidad.</p>
        <p><strong>2.1.2 Elementos distintivos en el sector salud:</strong> La planificación en salud se distingue de otros sectores por la naturaleza de su "producto": la recuperación o mantención del bienestar humano. Esto introduce variables irreductibles de incertidumbre biológica, variabilidad clínica y dilemas éticos. Además, el mercado de la salud presenta fallas estructurales como la asimetría de información (el paciente no sabe lo que necesita, el médico decide), la demanda derivada (inducida por la oferta) y la externalidad del acto sanitario.</p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">2.2 Principios de gestión hospitalaria moderna</h3>
        <p>La gestión hospitalaria moderna ha evolucionado desde un modelo burocrático-administrativo hacia enfoques más dinámicos y centrados en el valor:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Gestión por Procesos Asistenciales:</strong> Entender la atención como un flujo continuo que atraviesa servicios (urgencia &rarr; pabellón &rarr; UCI), rompiendo la lógica de compartimentos estancos.</li>
          <li><strong>Gobernanza Clínica:</strong> Involucrar activamente a los profesionales de la salud en la gestión de recursos, calidad y seguridad, compartiendo la responsabilidad de los resultados.</li>
          <li><strong>Orientación al Valor (Value-Based Healthcare):</strong> El objetivo no es solo producir prestaciones (volumen), sino lograr los mejores resultados de salud percibidos por el paciente en relación con el costo (valor).</li>
          <li><strong>Transformación Digital e Inteligencia Sanitaria:</strong> Uso intensivo de datos clínicos y administrativos (Big Data, IA) para la toma de decisiones basada en evidencia (sistemas SIDRA, GRD, RISS).</li>
          <li><strong>Redes Integradas (RISS):</strong> La gestión no termina en los muros del hospital; se extiende a la coordinación con la atención primaria y la continuidad de cuidados en el territorio.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">2.4 Normativas nacionales e internacionales relevantes</h3>
        <p><strong>2.4.1 Normativas nacionales vinculantes y orientadoras:</strong></p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ley 19.937 de Autoridad Sanitaria:</strong> Separa las funciones de rectoría (MINSAL), fiscalización (Superintendencia) y prestación (Servicios de Salud). Define el rol y atribuciones de los establecimientos de autogestión en red (EAR).</li>
          <li><strong>DFL 1 de 2005:</strong> Texto refundido que organiza el Sistema Nacional de Servicios de Salud, detallando la estructura de la red asistencial y las competencias directivas.</li>
          <li><strong>Ley 20.584 (Derechos y Deberes):</strong> Marco ético-legal vinculante que obliga a incorporar la dignidad, autonomía, información y seguridad del paciente como ejes centrales de cualquier estrategia institucional.</li>
          <li><strong>Estrategia Nacional de Salud (ENS) 2021-2030:</strong> Hoja de ruta sanitaria del país que define 4 grandes objetivos sanitarios y 7 ejes estratégicos, con metas de impacto que deben guiar la planificación local.</li>
        </ul>
      </div>
    ),
    content: (
      <div className="font-sans text-slate-700 leading-relaxed space-y-6">
        <SectionTitle>2.1 Definición Operativa de Planificación en Salud</SectionTitle>
        <DefinitionBox term="Planificación Estratégica en Salud" def="Proceso sistemático, participativo y orientado al futuro mediante el cual una organización define su dirección, formula objetivos de impacto sanitario y asigna recursos. No busca predecir el futuro, sino construirlo tomando decisiones hoy para asegurar resultados en salud poblacional y satisfacción usuaria." />
        
        <SectionTitle>2.2 Principios de Gestión Hospitalaria Moderna</SectionTitle>
        <p>El manual establece 4 principios que separan la administración tradicional burocrática de la gestión estratégica moderna:</p>
        <div className="space-y-4">
          <SubSection title="1. Gestión por Procesos Asistenciales">
            Entender la atención como un flujo continuo que atraviesa servicios (Urgencia &rarr; Pabellón &rarr; UCI), rompiendo la lógica de "compartimentos estancos" o feudos.
          </SubSection>
          <SubSection title="2. Gobernanza Clínica">
            Involucrar activamente a los profesionales de la salud en la gestión de recursos, calidad y seguridad. Compartir la responsabilidad de los resultados entre clínicos y administrativos.
          </SubSection>
          <SubSection title="3. Orientación al Valor (Value-Based Healthcare)">
            El objetivo no es solo producir volumen de prestaciones, sino lograr los mejores resultados de salud percibidos por el paciente en relación con el costo.
          </SubSection>
          <SubSection title="4. Transformación Digital e Inteligencia Sanitaria">
            Uso intensivo de datos clínicos y administrativos (Big Data, IA) para tomar decisiones basadas en evidencia, no en intuiciones.
          </SubSection>
        </div>

        <SectionTitle>2.4 Arquitectura Normativa Chilena</SectionTitle>
        <p>Ningún plan puede operar en el vacío. Debe inscribirse dentro del siguiente marco legal vinculante:</p>
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 border-b border-slate-200">
              <tr><th className="px-6 py-4 text-left font-bold text-slate-700">Instrumento Legal</th><th className="px-6 py-4 text-left font-bold text-slate-700">Implicancia Estratégica</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr><td className="px-6 py-4 font-bold text-teal-800">Ley 19.937 (Autoridad Sanitaria)</td><td className="px-6 py-4">Separa funciones de rectoría (Minsal), fiscalización y redes asistenciales. Define las atribuciones de los establecimientos de autogestión en red (EAR).</td></tr>
              <tr><td className="px-6 py-4 font-bold text-teal-800">DFL 1 de 2005</td><td className="px-6 py-4">Texto refundido que organiza el Sistema Nacional de Servicios de Salud y detalla las competencias directivas.</td></tr>
              <tr><td className="px-6 py-4 font-bold text-teal-800">Ley 20.584 (Derechos y Deberes)</td><td className="px-6 py-4">Marco ético-legal vinculante. La estrategia debe incorporar explícitamente la dignidad, autonomía, información y seguridad del paciente.</td></tr>
              <tr><td className="px-6 py-4 font-bold text-teal-800">ENS 2021-2030</td><td className="px-6 py-4">La Estrategia Nacional de Salud fija las metas sanitarias país. Los hospitales deben alinear sus objetivos locales a estas metas de impacto.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    quiz: [
      { id: 201, question: "El principio de Gobernanza Clínica implica que las decisiones financieras son exclusivas de los ingenieros comerciales.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Implica responsabilidad compartida. Los clínicos participan en decisiones de gestión porque estas afectan la calidad y seguridad del paciente." },
      { id: 202, question: "La Ley 20.584 regula los aranceles y presupuestos de los hospitales.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Esa ley regula los Derechos y Deberes de los pacientes (trato digno, seguridad, información). El presupuesto se rige por otras normas." },
      { id: 203, question: "La Estrategia Nacional de Salud (ENS) es una sugerencia opcional para los hospitales públicos.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Es la política pública rectora. Los objetivos estratégicos de los hospitales deben alinearse obligatoriamente con las metas de la ENS." }
    ]
  },
  {
    id: 'cap3',
    title: '3. Metodología General',
    description: 'El ciclo iterativo de la planificación estratégica: 4 fases fundamentales y participación.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
    glossary: [
        { term: "Ciclo Iterativo", definition: "Proceso que se repite periódicamente, donde el resultado de una vuelta alimenta el inicio de la siguiente, permitiendo la mejora continua." },
        { term: "Legitimidad", definition: "Reconocimiento y aceptación social/política de una decisión o plan por parte de los involucrados (stakeholders)." },
        { term: "PESTEL", definition: "Herramienta de análisis del entorno macro: Político, Económico, Social, Tecnológico, Ecológico y Legal." },
        { term: "FODA", definition: "Matriz de análisis situacional: Fortalezas, Oportunidades, Debilidades y Amenazas." },
        { term: "Cuadro de Mando Integral (BSC)", definition: "Herramienta de gestión que traduce la estrategia en un conjunto coherente de indicadores de desempeño." }
    ],
    fullContent: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">3.1 Ciclo de la planificación estratégica</h3>
        <p>El ciclo de planificación propuesto es un proceso iterativo, dinámico y continuo, compuesto por cuatro fases fundamentales que se retroalimentan y evolucionan en el tiempo:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Fase Preparatoria y de Diseño:</strong> Definición de equipos, gobernanza del proceso, cronogramas, análisis de involucrados y validación política inicial.</li>
          <li><strong>Fase de Diagnóstico Situacional:</strong> Análisis profundo y basado en evidencia de la realidad interna y el entorno externo.</li>
          <li><strong>Fase de Formulación Estratégica:</strong> Definición de la identidad (Misión/Visión), objetivos, estrategias y planes de acción.</li>
          <li><strong>Fase Operativa, Seguimiento y Evaluación:</strong> Implementación táctica, monitoreo de indicadores y evaluación de resultados para el aprendizaje.</li>
        </ol>
        <p>Este ciclo no tiene un fin definitivo; al concluir un periodo estratégico, la evaluación alimenta el diagnóstico del siguiente ciclo, generando una espiral de mejora continua.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">3.2 Herramientas metodológicas para cada fase</h3>
        <p>Para asegurar rigor técnico, se deben utilizar herramientas validadas en cada etapa:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Diagnóstico:</strong> Análisis PESTEL (entorno macro), Análisis de las 5 Fuerzas (entorno industrial), FODA (síntesis interna/externa), Matriz de Stakeholders. Uso intensivo de datos secundarios (DEIS, REM, GRD).</li>
          <li><strong>Formulación:</strong> Matrices de priorización (Hanlon, Parrilla de Análisis), Árboles de Problemas y Objetivos, Metodología de Marco Lógico, Mapas Estratégicos.</li>
          <li><strong>Operativa:</strong> Carta Gantt, Presupuesto Base Cero o Histórico, Matrices de Riesgos, Cuadro de Mando Integral (BSC).</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">3.3 Participación, facilitación y gobernanza del proceso</h3>
        <p><strong>3.3.1 Participación: legitimidad, pertenencia y alineación organizacional:</strong> La participación no es un mero trámite consultivo. Involucrar activamente a los trabajadores (clínicos y administrativos), gremios, directivos y a la comunidad organizada (Consejos Consultivos, COSOC) otorga legitimidad política y viabilidad social al plan. Permite capturar el conocimiento tácito de la organización y facilita la gestión del cambio, reduciendo resistencias futuras.</p>
        
        <p><strong>3.3.3 Gobernanza: estructuras, roles y sostenibilidad del proceso:</strong> Debe constituirse formalmente un Comité Estratégico o Consejo Técnico Ampliado, liderado por la Dirección, que valide cada etapa del proceso. Este órgano debe tener representatividad y continuidad, sobreviviendo a los cambios de administración para asegurar la "política de Estado" de la institución.</p>
      </div>
    ),
    content: (
      <div className="font-sans text-slate-700 leading-relaxed space-y-6">
        <SectionTitle>3.1 El Ciclo de Planificación Estratégica</SectionTitle>
        <p>El ciclo de planificación propuesto es un proceso <strong>iterativo, dinámico y continuo</strong>, compuesto por cuatro fases fundamentales que se retroalimentan:</p>
        
        <div className="space-y-4">
          <SubSection title="1. Fase Preparatoria y de Diseño">
            Definición de equipos, gobernanza del proceso, cronogramas, análisis de involucrados y validación política inicial.
          </SubSection>
          <SubSection title="2. Fase de Diagnóstico Situacional">
            Análisis profundo y basado en evidencia de la realidad interna y el entorno externo. Responde a: ¿Dónde estamos?
          </SubSection>
          <SubSection title="3. Fase de Formulación Estratégica">
            Definición de la identidad (Misión/Visión), objetivos, estrategias y planes de acción. Responde a: ¿Hacia dónde queremos ir?
          </SubSection>
          <SubSection title="4. Fase Operativa, Seguimiento y Evaluación">
            Implementación táctica, monitoreo de indicadores y evaluación de resultados. Este ciclo no tiene fin; la evaluación alimenta el diagnóstico siguiente.
          </SubSection>
        </div>

        <SectionTitle>3.2 Herramientas Metodológicas por Fase</SectionTitle>
        <p>Para asegurar rigor técnico, se deben utilizar herramientas validadas en cada etapa:</p>
        <ul className="list-disc pl-6 space-y-2">
            <li><strong>Diagnóstico:</strong> Análisis PESTEL (entorno macro), Análisis de las 5 Fuerzas (entorno industrial), FODA (síntesis), Matriz de Stakeholders. Uso de datos secundarios (DEIS, REM, GRD).</li>
            <li><strong>Formulación:</strong> Matrices de priorización (Hanlon, Parrilla de Análisis), Árboles de Problemas y Objetivos, Marco Lógico, Mapas Estratégicos.</li>
            <li><strong>Operativa:</strong> Carta Gantt, Presupuesto Base Cero o Histórico, Matrices de Riesgos, Cuadro de Mando Integral (BSC).</li>
        </ul>

        <SectionTitle>3.3 Participación y Gobernanza</SectionTitle>
        <QuoteBox text="Un plan construido 'a puertas cerradas' por la cúpula directiva tiene altas probabilidades de convertirse en 'letra muerta'." />
        <p>La participación no es un trámite consultivo. Involucrar a trabajadores, gremios y comunidad (Consejos Consultivos, COSOC) otorga legitimidad política y viabilidad social. Debe constituirse un <strong>Comité Estratégico</strong> liderado por la Dirección que valide cada etapa.</p>
      </div>
    ),
    quiz: [
      { id: 301, question: "El ciclo de planificación estratégica tiene un fin definitivo una vez que se escribe el plan.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Es un ciclo continuo. La evaluación final alimenta el diagnóstico del siguiente ciclo, generando una espiral de mejora." },
      { id: 302, question: "Las herramientas como PESTEL y FODA se utilizan principalmente en la fase de Formulación Estratégica.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Son herramientas típicas de la Fase de Diagnóstico Situacional para analizar el entorno y la realidad interna." },
      { id: 303, question: "La participación de gremios y comunidad otorga viabilidad social y legitimidad política al plan.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. Un plan construido a puertas cerradas carece de apropiación y suele fracasar en la implementación." }
    ]
  },
  {
    id: 'cap4',
    title: '4. Diagnóstico Estratégico',
    description: 'Radiografía institucional precisa: Caracterización, Análisis de Entorno y Brechas.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    glossary: [
        { term: "Case-Mix Index (CMI)", definition: "Índice que refleja la complejidad promedio de los pacientes atendidos en un hospital, basado en los GRD." },
        { term: "DEIS", definition: "Departamento de Estadísticas e Información de Salud. Fuente oficial de datos sanitarios en Chile." },
        { term: "Brecha Crítica", definition: "Distancia cuantificable entre el desempeño actual de la institución y el estándar necesario para cumplir su misión." },
        { term: "Stakeholders", definition: "Actores clave (internos o externos) que tienen interés o poder sobre la organización y su estrategia." },
        { term: "Matriz de Cruce FODA", definition: "Técnica que combina fortalezas/debilidades con oportunidades/amenazas para generar estrategias (FO, FA, DO, DA)." }
    ],
    fullContent: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">4.1 Caracterización del hospital</h3>
        <p><strong>4.1.1 Dimensiones clave para una caracterización estratégica:</strong> El diagnóstico comienza con una radiografía precisa y honesta de la institución "tal como es".</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cartera de Servicios Real:</strong> Qué especialidades, subespecialidades y prestaciones ofrece realmente la institución (versus lo que figura en las resoluciones exentas).</li>
          <li><strong>Complejidad y Case-Mix:</strong> Nivel de resolución técnica, disponibilidad de camas críticas, pabellones y tecnología. Uso del Índice CMI (Case Mix Index) derivado de los GRD para objetivar la complejidad de los pacientes atendidos.</li>
          <li><strong>Población Beneficiaria:</strong> Caracterización demográfica, perfil epidemiológico, nivel socioeconómico, ruralidad e interculturalidad de la población a cargo.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">4.2 Análisis del entorno externo</h3>
        <p><strong>4.2.1 Dimensiones del entorno externo a considerar:</strong></p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Epidemiológico:</strong> Carga de enfermedad actual y proyectada (ENS 2021-2030), envejecimiento, cronicidad, amenazas de pandemia/endemia.</li>
          <li><strong>Político-Legal-Normativo:</strong> Cambios en gobiernos, nuevas leyes con impacto sanitario (ej. Ley del Cáncer, Ley de Salud Mental, Ley de Autismo, Ley Karin).</li>
          <li><strong>Tecnológico:</strong> Disrupción digital, telemedicina, inteligencia artificial, fármacos de alto costo.</li>
          <li><strong>Social:</strong> Cambios en expectativas ciudadanas, empoderamiento de pacientes, judicialización de la salud.</li>
          <li><strong>Económico:</strong> Crecimiento del país, inflación sectorial, desempleo (impacto en Fonasa vs Isapre).</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">4.4 Identificación de brechas críticas</h3>
        <p><strong>4.4.1 ¿Qué es una brecha crítica en planificación estratégica en salud?</strong> Es la distancia cuantificable entre el desempeño actual de la institución y el estándar necesario (normativo, técnico o estratégico) para cumplir su misión. Ejemplo: Tiempos de espera GES reales vs. Garantía de Oportunidad legal.</p>
        <p><strong>4.4.5 Consideraciones prácticas en el sector salud:</strong> Es vital distinguir entre brechas de gestión (solucionables internamente con mejor administración) y brechas estructurales (dependientes de inversión o decisiones del nivel central/macrorred). El plan debe abordar ambas con estrategias diferenciadas.</p>
      </div>
    ),
    content: (
      <div className="font-sans text-slate-700 leading-relaxed space-y-6">
        <p>El diagnóstico comienza con una radiografía precisa y honesta de la institución "tal como es", utilizando revisión exhaustiva de producción histórica (REM), dotación (SIRH) y estado de infraestructura.</p>

        <SectionTitle>4.1 Caracterización y Dimensiones Clave</SectionTitle>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cartera de Servicios Real:</strong> Lo que realmente se ofrece versus lo que figura en resoluciones.</li>
          <li><strong>Complejidad y Case-Mix:</strong> Uso del Índice CMI derivado de los GRD para objetivar la complejidad de los pacientes atendidos.</li>
          <li><strong>Población Beneficiaria:</strong> Perfil epidemiológico, nivel socioeconómico, ruralidad e interculturalidad.</li>
        </ul>

        <SectionTitle>4.2 Análisis del Entorno Externo (PESTEL)</SectionTitle>
        <p>Factores fuera de control directo pero de alto impacto:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Epidemiológico:</strong> Carga de enfermedad (ENS 2021-2030), envejecimiento, cronicidad.</li>
          <li><strong>Político-Legal:</strong> Nuevas leyes (Ley del Cáncer, Ley TEA, Ley Karin).</li>
          <li><strong>Tecnológico:</strong> Disrupción digital, IA, fármacos de alto costo.</li>
          <li><strong>Económico:</strong> Inflación sectorial, desempleo, crisis de Isapres (impacto en Fonasa).</li>
        </ul>

        <SectionTitle>4.3 Análisis Interno y Brechas Críticas</SectionTitle>
        <p>Identificación de Fortalezas y Debilidades en gestión clínica, financiera, de personas y calidad. Se debe identificar la <strong>Brecha Crítica</strong>: la distancia cuantificable entre el desempeño actual y el estándar necesario para cumplir la misión (ej. Tiempos de espera GES reales vs. Garantía legal).</p>
        
        <SectionTitle>4.4.6 Análisis de Actores</SectionTitle>
        <p>Mapeo de Stakeholders: Identificar actores clave (Gremios, médicos jefes, proveedores), sus intereses y poder, y si son aliados u opositores. Definir estrategias de relacionamiento.</p>
      </div>
    ),
    quiz: [
      { id: 401, question: "El análisis PESTEL se utiliza para evaluar el clima laboral interno y la gestión de camas.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. PESTEL analiza el entorno EXTERNO (Político, Económico, Social, etc.). El clima laboral es análisis interno." },
      { id: 402, question: "Una brecha de gestión es aquella que se puede solucionar internamente con una mejor administración, sin depender necesariamente de inversión externa.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. A diferencia de las brechas estructurales, las de gestión dependen de la eficiencia de los procesos internos." },
      { id: 403, question: "El Índice CMI (Case Mix Index) sirve para objetivar la complejidad de los pacientes atendidos.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. Es un indicador derivado de los GRD que permite comparar la complejidad entre hospitales." }
    ]
  },
  {
    id: 'cap5',
    title: '5. Formulación Estratégica',
    description: 'Definición de Identidad: Misión, Visión, Valores y Objetivos Estratégicos.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=2000',
    glossary: [
        { term: "SMART", definition: "Metodología para objetivos: Específicos, Medibles, Alcanzables, Relevantes y Temporales." },
        { term: "Método de Hanlon", definition: "Herramienta de priorización de problemas basada en Magnitud, Severidad, Eficacia y Factibilidad." },
        { term: "Misión", definition: "Razón de ser fundamental de la organización. Responde a ¿Qué hacemos? y ¿Para quién?" },
        { term: "Visión", definition: "Imagen objetivo deseada a largo plazo (5-10 años). Debe ser inspiradora y desafiante." },
        { term: "Valores", definition: "Principios éticos que guían la conducta organizacional y la toma de decisiones." }
    ],
    fullContent: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">5.1 Definición de misión, visión y valores institucionales</h3>
        <p><strong>5.1.1 ¿Qué es la misión institucional?</strong> La misión define la razón de ser fundamental de la organización. En salud pública, suele estar dada por ley (DFL 1), pero debe ser "interpretada" y apropiada localmente. Debe responder: ¿Qué hacemos? ¿Para quién lo hacemos? ¿Cuál es nuestro valor distintivo?</p>
        <p><strong>5.1.2 ¿Qué es la visión institucional?</strong> Es la imagen objetivo deseada a largo plazo (5-10 años). Debe ser inspiradora, desafiante pero alcanzable, y compartida por la comunidad hospitalaria.</p>
        <p><strong>5.1.4 Aplicación estratégica:</strong> Estos elementos actúan como el "filtro ético y estratégico" para la toma de decisiones. Si una oportunidad de negocio o proyecto contradice la misión o los valores (ej. selección de pacientes por riesgo), debe ser descartada.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">5.2 Objetivos estratégicos</h3>
        <p><strong>5.2.1 ¿Qué es un objetivo estratégico?</strong> Es un resultado global, cualitativo o cuantitativo, que la organización busca alcanzar en el mediano plazo para materializar su visión y cumplir su misión. Deben ser de alto nivel y transversales.</p>
        <p><strong>5.2.3 Proceso metodológico:</strong> Utilizar la metodología SMART (Específicos, Medibles, Alcanzables, Relevantes, Temporales). Deben derivar directamente de la priorización de problemas del Capítulo 4.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">5.3 Priorización de problemas y oportunidades</h3>
        <p><strong>5.3.1 ¿Por qué priorizar?</strong> Los recursos son siempre finitos y las necesidades infinitas. Intentar resolver todo a la vez lleva a la dispersión de esfuerzos y al fracaso. La estrategia es, en esencia, el arte de renunciar para enfocar.</p>
        <p><strong>5.3.3 Delimitación de focos estratégicos:</strong> Seleccionar 3 a 5 "Ejes Estratégicos", "Pilares" o "Focos" donde se concentrará la energía institucional (ej. "Eje de Transformación Digital", "Eje de Excelencia Operacional", "Eje de Humanización").</p>
      </div>
    ),
    content: (
      <div className="font-sans text-slate-700 leading-relaxed space-y-6">
        <SectionTitle>5.1 La Tríada Identitaria</SectionTitle>
        <p>Estos elementos actúan como el "filtro ético y estratégico" para la toma de decisiones:</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-500">
            <strong className="text-blue-900 block text-lg mb-2">MISIÓN</strong>
            <p>Razón de ser. En salud pública suele estar dada por ley (DFL 1), pero debe ser interpretada localmente. Responde: ¿Qué hacemos? ¿Para quién?</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500">
            <strong className="text-green-900 block text-lg mb-2">VISIÓN</strong>
            <p>Imagen objetivo deseada a largo plazo (5-10 años). Debe ser inspiradora, desafiante pero alcanzable. Ejemplo: "Ser el hospital líder en innovación digital en 2030".</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border-t-4 border-orange-500">
            <strong className="text-orange-900 block text-lg mb-2">VALORES</strong>
            <p>Principios éticos que guían la conducta (Probidad, Respeto, Excelencia). No deben ser letra muerta; deben operacionalizarse en protocolos.</p>
          </div>
        </div>

        <SectionTitle>5.2 Objetivos Estratégicos</SectionTitle>
        <p>Resultados globales que la organización busca alcanzar en el mediano plazo. Deben ser de alto nivel y transversales (Asistenciales, Financieros, Desarrollo, Usuarios).</p>
        <p>Utilizar la metodología <strong>SMART</strong>:</p>
        <ul className="list-none space-y-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <li>✅ <strong>Specific:</strong> Específicos.</li>
            <li>✅ <strong>Measurable:</strong> Medibles.</li>
            <li>✅ <strong>Achievable:</strong> Alcanzables.</li>
            <li>✅ <strong>Relevant:</strong> Relevantes.</li>
            <li>✅ <strong>Time-bound:</strong> Temporales (con plazo).</li>
        </ul>

        <SectionTitle>5.3 Priorización y Focos</SectionTitle>
        <p>La estrategia es, en esencia, el arte de renunciar para enfocar. Como los recursos son finitos, se debe priorizar usando métodos como <strong>Hanlon</strong> o matrices de <strong>Esfuerzo vs. Impacto</strong>.</p>
        <p>Se recomienda seleccionar 3 a 5 "Ejes Estratégicos" o "Pilares" donde se concentrará la energía institucional (ej. "Eje de Transformación Digital", "Eje de Excelencia Operacional").</p>
      </div>
    ),
    quiz: [
      { id: 501, question: "Un objetivo estratégico bien formulado debe ser una declaración de buenas intenciones sin plazo definido.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Debe ser SMART, lo que incluye ser Temporal (Time-bound). Sin plazo, no es un objetivo de gestión." },
      { id: 502, question: "La Visión corresponde a la razón de ser fundamental de la organización en el presente.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Esa es la Misión. La Visión es la imagen objetivo deseada a largo plazo (futuro)." },
      { id: 503, question: "Priorizar implica necesariamente renunciar a abordar todos los problemas al mismo tiempo.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. Dado que los recursos son finitos, intentar hacerlo todo lleva a la dispersión y el fracaso. La estrategia requiere foco." }
    ]
  },
  {
    id: 'cap6',
    title: '6. Plan Operativo Estratégico (POE)',
    description: 'Bajada táctica: Planificación anual, presupuesto y cronogramas.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070',
    glossary: [
        { term: "POA / POE", definition: "Plan Operativo Anual / Estratégico. Instrumento que traduce la estrategia a tareas, metas y presupuesto para un año fiscal." },
        { term: "Carta Gantt", definition: "Herramienta gráfica que expone el tiempo de dedicación previsto para diferentes tareas a lo largo de un tiempo total determinado." },
        { term: "PMG", definition: "Programa de Mejoramiento de la Gestión. Mecanismo de incentivos en el sector público asociado al cumplimiento de objetivos." },
        { term: "Rigidez Presupuestaria", definition: "Característica del sector público donde los fondos están asignados a ítems específicos y no pueden moverse libremente." },
        { term: "Reitemización", definition: "Proceso administrativo para reasignar recursos financieros de una partida a otra ante cambios de necesidades." }
    ],
    fullContent: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">6.1 Traducción de objetivos en planes operativos anuales</h3>
        <p><strong>6.1.1 ¿Qué es un plan operativo estratégico anual (POA)?</strong> Es la bajada táctica y concreta del plan estratégico para un año fiscal específico. Convierte la estrategia de largo plazo (5 años) en tareas gestionables, presupuestadas y medibles de 12 meses.</p>
        <p><strong>6.1.2 Principios orientadores:</strong> Realismo presupuestario (calzar con el presupuesto real), asignación inequívoca de responsabilidades, flexibilidad ante contingencias epidemiológicas (ej. campaña de invierno), coherencia con la planificación de la red.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">6.1.3 Componentes de un POE estructurado</h3>
        <p>Para cada iniciativa se deben definir: Actividades específicas, Metas anuales (físicas y financieras), Presupuesto asignado, Cronograma detallado (Carta Gantt), Responsable directo (nombre y cargo).</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">6.1.4 Aplicabilidad diferenciada por tipo de institución</h3>
        <p>En el sector público, el POA debe calzar estrictamente con la Ley de Presupuestos, los Programas de Mejoramiento de la Gestión (PMG) y la programación médica. En privados, se alinea con el presupuesto anual aprobado por el directorio.</p>
      </div>
    ),
    content: (
      <div className="font-sans text-slate-700 leading-relaxed space-y-6">
        <p className="text-lg">
          El <strong>Plan Operativo Estratégico Anual (POA/POE)</strong> es la bajada táctica y concreta del plan estratégico para un año fiscal específico. Convierte la estrategia de largo plazo (5 años) en tareas gestionables, presupuestadas y medibles de 12 meses.
        </p>

        <SectionTitle>6.1 Principios Orientadores</SectionTitle>
        <ul className="list-disc pl-6 space-y-2">
            <li><strong>Realismo Presupuestario:</strong> Calzar estrictamente con el presupuesto real (Ley de Presupuestos en sector público).</li>
            <li><strong>Asignación Inequívoca:</strong> Responsables directos con nombre y cargo.</li>
            <li><strong>Flexibilidad:</strong> Capacidad de adaptación ante contingencias epidemiológicas (ej. campaña de invierno).</li>
        </ul>

        <SectionTitle>6.3 Componentes de un POE Estructurado</SectionTitle>
        <DefinitionBox term="Componentes POE" def="Para cada iniciativa se define: Actividades específicas, Metas anuales (físicas y financieras), Presupuesto asignado, Cronograma detallado (Carta Gantt) y Responsable directo." />
        
        <SectionTitle>6.4 Gestión de Recursos</SectionTitle>
        <div className="bg-red-50 p-6 rounded-2xl border border-red-100 shadow-sm">
          <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2"><AlertTriangle size={24}/> Gestión Financiera</h4>
          <p className="text-red-800 mb-2">
            <strong>Reitemización:</strong> Capacidad de gestión financiera para reasignar recursos ante emergencias o nuevas prioridades.
          </p>
          <p className="text-red-800 text-sm">
            Vincular el plan estratégico con instrumentos como el Presupuesto Exploratorio, Proyectos de Inversión (EBI) al MIDESO, y Programas de Mejoramiento (PMI).
          </p>
        </div>
      </div>
    ),
    quiz: [
      { id: 601, question: "El POE convierte la estrategia de largo plazo en tareas gestionables de 12 meses.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. Es la herramienta táctica anual que operacionaliza la estrategia quinquenal." },
      { id: 602, question: "En el sector público, el POE puede exceder el presupuesto asignado si la estrategia es muy ambiciosa.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Debe existir realismo presupuestario. El POE debe calzar estrictamente con la Ley de Presupuestos." },
      { id: 603, question: "La flexibilidad ante contingencias epidemiológicas es un principio orientador del POE en salud.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. Dado que la demanda sanitaria es variable (ej. invierno), el plan debe permitir ajustes tácticos." }
    ]
  },
  {
    id: 'cap7',
    title: '7. Implementación',
    description: 'Gobernanza, Liderazgo y Gestión del Cambio para la ejecución.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070',
    glossary: [
        { term: "Gobernanza", definition: "Estructura de procesos y reglas mediante las cuales se toman e implementan decisiones, definiendo la distribución del poder." },
        { term: "Modelo de Kotter", definition: "Metodología de 8 pasos para gestionar el cambio organizacional (Urgencia, Coalición, Visión, Comunicación, etc.)." },
        { term: "Quick Wins", definition: "Victorias tempranas. Éxitos visibles, rápidos y baratos que ayudan a vencer el escepticismo en procesos de cambio." },
        { term: "UGC", definition: "Unidad de Gestión Clínica. Modelo que descentraliza la gestión entregando responsabilidad sobre recursos a los equipos clínicos." },
        { term: "Stakeholders", definition: "Partes interesadas (gremios, usuarios, autoridades) que pueden afectar o ser afectados por la estrategia." }
    ],
    fullContent: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">7.1 Modelos de gobernanza hospitalaria estratégica</h3>
        <p><strong>7.1.1 Principios:</strong> Transparencia, Rendición de Cuentas (Accountability), Participación, Equidad, Eficiencia. La gobernanza debe asegurar que la estrategia se ejecute y no quede en el papel.</p>
        <p><strong>7.1.2 Tipos de modelos:</strong> Modelo de Directorio (común en privados), Consejo Técnico Administrativo (órgano colegiado del sector público), Modelo de Gestión Clínica (Unidades de Gestión Clínica - UGC descentralizadas).</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">7.2 Liderazgo estratégico</h3>
        <p>El director/gerente debe ser el principal comunicador, evangelizador y defensor de la estrategia. Requiere liderazgo adaptativo para navegar tiempos de crisis y movilizar a equipos profesionales autónomos.</p>
        <p><strong>7.2.3 Comunicación interna:</strong> Comunicar insistentemente el "Por qué" (sentido) y el "Para qué" (propósito) del plan. La estrategia debe ser conocida y comprendida por todos, desde el camillero hasta el neurocirujano.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">7.3 Gestión del cambio organizacional</h3>
        <p><strong>7.3.1 Fundamentos:</strong> Modelo de Kotter: Crear sentido de urgencia, formar coaliciones poderosas, crear y comunicar visión, empoderar a otros, planificar éxitos a corto plazo, consolidar mejoras. El cambio en salud es difícil por la alta autonomía profesional y las culturas arraigadas.</p>
        <p><strong>7.3.3 Barreras comunes:</strong> "Siempre se ha hecho así", miedo a la tecnología, pérdida de poder/status médico, fatiga por cambios anteriores fallidos.</p>
      </div>
    ),
    content: (
      <div className="font-sans text-slate-700 leading-relaxed space-y-6">
        <SectionTitle>7.1 Modelos de Gobernanza Hospitalaria</SectionTitle>
        <p>La gobernanza debe asegurar que la estrategia se ejecute y no quede en el papel. Principios clave: Transparencia, Rendición de Cuentas (Accountability), Participación, Equidad.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Modelo de Directorio:</strong> Común en privados.</li>
          <li><strong>Consejo Técnico Administrativo:</strong> Órgano colegiado del sector público.</li>
          <li><strong>Gestión Clínica:</strong> Unidades descentralizadas (UGC) con responsabilidad sobre recursos.</li>
        </ul>

        <SectionTitle>7.2 Liderazgo Estratégico</SectionTitle>
        <p>El director/gerente debe ser el principal comunicador y "evangelizador" de la estrategia. Requiere liderazgo adaptativo para movilizar equipos profesionales autónomos. Es vital combatir el rumor ("radio pasillo") con comunicación clara.</p>

        <SectionTitle>7.3 Gestión del Cambio (Kotter)</SectionTitle>
        <p>Fundamentos del cambio organizacional en salud utilizando el modelo de Kotter:</p>
        <ol className="list-decimal pl-6 space-y-2">
            <li>Crear sentido de urgencia.</li>
            <li>Formar coaliciones poderosas.</li>
            <li>Crear y comunicar visión.</li>
            <li>Empoderar a otros.</li>
            <li>Planificar éxitos a corto plazo (Quick Wins).</li>
            <li>Consolidar mejoras.</li>
            <li>Institucionalizar el cambio en la cultura.</li>
        </ol>

        <SectionTitle>7.4 Alineación del Personal</SectionTitle>
        <p>Alinear objetivos individuales con institucionales. Los Jefes de Servicio y Enfermeras Supervisoras son las "correas de transmisión" esenciales. Herramientas: Convenios de Desempeño, Metas Sanitarias, Bonos.</p>
      </div>
    ),
    quiz: [
      { id: 701, question: "El modelo de Kotter sugiere comenzar institucionalizando el cambio en la cultura antes de crear urgencia.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Institucionalizar es el último paso. El primero es crear sentido de urgencia." },
      { id: 702, question: "Las Enfermeras Supervisoras y Jefes de Servicio son actores clave en la alineación estratégica.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. Actúan como correas de transmisión esenciales de la estrategia hacia los equipos operativos." },
      { id: 703, question: "La gobernanza hospitalaria debe asegurar la rendición de cuentas (accountability) de la estrategia.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. Es uno de los principios fundamentales de una buena gobernanza, junto con la transparencia y participación." }
    ]
  },
  {
    id: 'cap8',
    title: '8. Monitoreo y Evaluación',
    description: 'KPIs, periodicidad y reportabilidad para la toma de decisiones.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    glossary: [
        { term: "KPI", definition: "Key Performance Indicator. Indicador Clave de Desempeño que actúa como signo vital de la gestión." },
        { term: "Benchmarking", definition: "Proceso de comparar el desempeño propio con el de las mejores instituciones del sector para identificar brechas." },
        { term: "Ciclo PDCA", definition: "Plan-Do-Check-Act (Planificar, Hacer, Verificar, Actuar). Ciclo de Deming para la mejora continua." },
        { term: "SIGGES", definition: "Sistema de Información de Garantías Explícitas en Salud. Fuente de datos clave para monitoreo de listas de espera GES." },
        { term: "AVISA", definition: "Años de Vida Saludable Perdidos. Indicador de impacto sanitario que combina mortalidad prematura y discapacidad." }
    ],
    fullContent: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">8.1 Indicadores</h3>
        <p><strong>8.1.1 Funciones estratégicas:</strong> Alertar desviaciones tempranas (semáforos), fundamentar decisiones con evidencia, comparar desempeño histórico y con pares (benchmarking), rendir cuentas.</p>
        <p><strong>8.1.2 Tipología de indicadores:</strong></p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Estructura:</strong> Recursos disponibles (ej. Camas por 1000 habitantes, médicos por cama).</li>
          <li><strong>Proceso:</strong> Cómo se hacen las cosas (ej. Tiempo de espera en urgencia, tasa de suspensión de cirugías).</li>
          <li><strong>Resultado:</strong> Qué se logra (ej. Mortalidad hospitalaria, tasa de infecciones IAAS).</li>
          <li><strong>Impacto:</strong> Cambio en la salud poblacional (ej. AVISA, sobrevida a 5 años en cáncer).</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">8.2 Periodicidad de evaluación</h3>
        <p>Depende de la velocidad de cambio de la variable medida. Financieros y producción: mensual. Estratégicos y de impacto: trimestral, semestral o anual.</p>
        <p><strong>8.2.3 Articulación con procesos institucionales:</strong> Sincronizar con el ciclo de evaluación de COMGES (cortes trimestrales), ciclo presupuestario del Estado y ciclos de acreditación.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">8.4 Mecanismo de ajuste y mejora continua</h3>
        <p><strong>8.4.1 Fundamentos:</strong> Ciclo de Deming (PDCA: Planificar, Hacer, Verificar, Actuar). La estrategia es una hipótesis que se valida o corrige en la realidad. La organización debe aprender de su ejecución.</p>
      </div>
    ),
    content: (
      <div className="font-sans text-slate-700 leading-relaxed space-y-6">
        <SectionTitle>8.1 Indicadores Clave de Desempeño (KPI)</SectionTitle>
        <DefinitionBox term="KPI" def="Signos vitales de la organización que permiten monitorear la salud de la estrategia en tiempo real. Deben ser válidos, confiables, sensibles y específicos." />
        <p>Tipos de KPI:</p>
        <ul className="list-disc pl-6 space-y-2">
            <li><strong>Estructura:</strong> Recursos disponibles (ej. Camas por 1000 hab).</li>
            <li><strong>Proceso:</strong> Cómo se hacen las cosas (ej. Tasa suspensión cirugías).</li>
            <li><strong>Resultado:</strong> Qué se logra (ej. Mortalidad hospitalaria, IAAS).</li>
            <li><strong>Impacto:</strong> Cambio en salud poblacional (ej. AVISA, sobrevida cáncer).</li>
        </ul>

        <SectionTitle>8.2 Periodicidad y Articulación</SectionTitle>
        <p>Depende de la velocidad de cambio de la variable. <strong>Monitoreo Operativo:</strong> Mensual. <strong>Evaluación Táctica:</strong> Trimestral. <strong>Evaluación Estratégica:</strong> Semestral/Anual. Debe sincronizarse con ciclos COMGES y presupuestarios.</p>

        <SectionTitle>8.3 Informes y Retroalimentación</SectionTitle>
        <p>No basta enviar el informe por correo; hay que discutirlo presencialmente para generar aprendizaje. El informe debe documentar la historia fidedigna de la gestión y justificar desviaciones.</p>

        <SectionTitle>8.4 Mejora Continua (Ciclo PDCA)</SectionTitle>
        <p>Mecanismo de ajuste formal para modificar metas, indicadores o presupuestos cuando cambian drásticamente los supuestos. La estrategia es una hipótesis que se valida en la realidad.</p>
      </div>
    ),
    quiz: [
      { id: 801, question: "Un indicador de proceso mide el cambio final en la salud poblacional.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Mide cómo se hacen las cosas (ej. tiempos). El impacto mide el cambio en salud poblacional." },
      { id: 802, question: "La evaluación estratégica debe realizarse con la misma frecuencia mensual que el monitoreo operativo.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. La evaluación estratégica suele ser semestral o anual, mientras que el monitoreo operativo es mensual." },
      { id: 803, question: "El ciclo PDCA (Plan-Do-Check-Act) es fundamental para la mejora continua de la estrategia.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. Permite validar o corregir la estrategia basándose en la ejecución y verificación de resultados." }
    ]
  },
  {
    id: 'cap9',
    title: '9. Herramientas de Apoyo',
    description: 'Balanced Scorecard, Checklists y Talleres Participativos.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
    glossary: [
        { term: "Balanced Scorecard (BSC)", definition: "Cuadro de Mando Integral. Herramienta que traduce la estrategia en objetivos e indicadores organizados en perspectivas." },
        { term: "Mapa Estratégico", definition: "Representación visual de las relaciones causa-efecto entre los objetivos estratégicos." },
        { term: "Checklist", definition: "Lista de verificación para asegurar que no se omitan pasos críticos en un proceso." },
        { term: "Co-creación", definition: "Proceso de diseño activo donde usuarios y funcionarios participan en la generación de soluciones." },
        { term: "Metaplan", definition: "Técnica de moderación grupal que utiliza tarjetas para visualizar ideas y facilitar la discusión." }
    ],
    fullContent: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">9.1 Plantilla de FODA, PESTEL y mapas estratégicos</h3>
        <p><strong>9.1.1 Análisis FODA:</strong> Matriz clásica de 4 cuadrantes. Es fundamental cruzar las variables para generar estrategias (ej. Estrategia FO: usar Fortaleza interna para aprovechar Oportunidad externa).</p>
        <p><strong>9.1.3 Mapas estratégicos:</strong> Visualización gráfica (metodología Kaplan & Norton) de cómo los objetivos se conectan en relaciones causa-efecto a través de las perspectivas del BSC, contando la "historia de la estrategia".</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">9.3 Ejemplo de BSC (Balanced Scorecard)</h3>
        <p><strong>9.3.1 Perspectivas adaptadas a salud:</strong></p>
        <ul className="list-decimal pl-6 space-y-2">
          <li><strong>Usuarios/Comunidad/Pacientes:</strong> (En vez de Financiera como en empresas, esta es la perspectiva de resultado final). Satisfacción, impacto sanitario, acceso.</li>
          <li><strong>Procesos Internos:</strong> Calidad, seguridad, eficiencia clínica, gestión de tiempos.</li>
          <li><strong>Aprendizaje y Crecimiento:</strong> Personas, tecnología, infraestructura, clima, innovación.</li>
          <li><strong>Financiera/Recursos:</strong> Sostenibilidad, presupuesto, eficiencia de costos (base habilitante para las otras perspectivas en el sector público).</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">9.4 Checklist de procesos</h3>
        <p><strong>9.4.1 Funciones:</strong> Asegurar que no se salten pasos metodológicos críticos durante el proceso de planificación y control. Uso como herramienta de control de calidad.</p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">9.5 Guías para talleres participativos</h3>
        <p><strong>9.5.2 Diseño metodológico sugerido:</strong> Uso de técnicas participativas como Metaplan, World Café, Lluvia de ideas estructurada, Design Thinking. Estructura: Apertura &rarr; Divergencia &rarr; Convergencia &rarr; Cierre.</p>
      </div>
    ),
    content: (
      <div className="font-sans text-slate-700 leading-relaxed space-y-6">
        <SectionTitle>9.3 Balanced Scorecard (BSC)</SectionTitle>
        <p>Adaptación del modelo de Kaplan & Norton. En salud pública, la perspectiva financiera es base habilitante, no el fin último. Se propone el siguiente orden o adaptación:</p>
        <ul className="list-decimal pl-6 space-y-2">
            <li><strong>Usuarios/Comunidad:</strong> Perspectiva de resultado final (Satisfacción, impacto).</li>
            <li><strong>Procesos Internos:</strong> Calidad, seguridad, eficiencia.</li>
            <li><strong>Aprendizaje y Crecimiento:</strong> Personas, tecnología, clima.</li>
            <li><strong>Financiera/Recursos:</strong> Sostenibilidad, presupuesto (base).</li>
        </ul>

        <SectionTitle>9.4 Checklists</SectionTitle>
        <p>Listas de verificación para asegurar que no se salten pasos metodológicos críticos. Útil para el control de calidad del proceso de planificación.</p>

        <SectionTitle>9.5 Talleres Participativos</SectionTitle>
        <p>Guías para co-diseño y validación. Uso de técnicas como <strong>Metaplan, World Café y Design Thinking</strong>. Estructura recomendada: Apertura &rarr; Divergencia &rarr; Convergencia &rarr; Cierre.</p>
      </div>
    ),
    quiz: [
      { id: 901, question: "En el BSC de salud pública, la perspectiva financiera suele ubicarse en la cima como objetivo final.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. En salud pública, la perspectiva financiera es un medio/base. El fin último son los Usuarios/Comunidad." },
      { id: 902, question: "Los checklists son herramientas útiles para asegurar que no se omitan pasos metodológicos críticos.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. Funcionan como control de calidad del proceso de planificación." },
      { id: 903, question: "La técnica de World Café fomenta el diálogo rotativo para conectar ideas de grandes grupos.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. Es una metodología participativa eficaz para la reflexión colectiva." }
    ]
  },
  {
    id: 'cap10',
    title: '10. Consideraciones Diferenciadas',
    description: 'Especificidades de la gestión Pública vs. Privada.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053',
    glossary: [
        { term: "Mandato Institucional", definition: "Orden o precepto que origina la existencia de la organización. En públicos es la Ley; en privados, la voluntad de los dueños." },
        { term: "Contraloría", definition: "Organismo autónomo que fiscaliza la legalidad de los actos de la administración pública." },
        { term: "Ley Corta de Isapres", definition: "Legislación reciente que regula aspectos financieros y de precios en el sistema privado para asegurar continuidad." },
        { term: "Convenio Marco", definition: "Modalidad de compra pública estandarizada para adquirir bienes y servicios de uso común." },
        { term: "VAN / TIR", definition: "Valor Actual Neto / Tasa Interna de Retorno. Indicadores financieros clave para evaluar proyectos de inversión privada." }
    ],
    fullContent: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">10.1 Instituciones públicas</h3>
        <p><strong>10.1.1 Mandato institucional:</strong> El "dueño" es el Estado. El mandato principal es ejecutar las políticas públicas de salud. La rigidez normativa es alta, sujeta a la fiscalización de la Contraloría General de la República.</p>
        <p><strong>10.1.2 Gobernanza compleja:</strong> El hospital público no es una isla; es un nodo interdependiente de la red asistencial. Depende de la Atención Primaria (APS) para las referencias y contrarreferencias, y del extrasistema para la compra de servicios. La planificación debe ser en red (modelo RISS).</p>
        <p><strong>10.1.3 Limitaciones y oportunidades:</strong> Infraestructura a veces antigua u obsoleta, brecha crónica de recursos humanos y especialistas. Oportunidad: Innovación pública, telemedicina (Hospital Digital), integración con la comunidad.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">10.2 Instituciones privadas</h3>
        <p><strong>10.2.1 Marco operativo y lógica de mercado:</strong> Competencia intensa por pacientes (con y sin seguro) y por talento médico (especialistas). Relación contractual crítica con las Isapres y seguros complementarios (prestador preferente).</p>
        <p><strong>10.2.3 Desafíos estratégicos:</strong> Incertidumbre regulatoria (crisis de Isapres, Ley Corta), necesidad de contención de costos, exigencia de transparencia de precios, competencia de nuevos actores low-cost.</p>
        <p><strong>10.2.5 Resultado esperado:</strong> Plan Estratégico de Negocios y Desarrollo Sostenible que asegure la viabilidad y competitividad futura.</p>
      </div>
    ),
    content: (
      <div className="font-sans text-slate-700 leading-relaxed space-y-6">
        <SectionTitle>10.1 Instituciones Públicas</SectionTitle>
        <p>El "dueño" es el Estado. Mandato principal: ejecutar políticas públicas. Alta rigidez normativa (Contraloría). El hospital no es una isla; es un nodo interdependiente de la red (RISS), dependiendo de APS y extrasistema.</p>
        <p><strong>Limitaciones:</strong> Infraestructura a veces obsoleta, brecha crónica de RRHH. <strong>Oportunidad:</strong> Innovación pública, telemedicina, integración comunitaria.</p>

        <SectionTitle>10.2 Instituciones Privadas</SectionTitle>
        <p>Marco operativo de competencia intensa por pacientes y talento médico. Relación contractual crítica con Isapres. Foco fuerte en marketing sanitario, eficiencia de costos y márgenes.</p>
        <p><strong>Desafíos:</strong> Incertidumbre regulatoria (Ley Corta), contención de costos, transparencia de precios. Planificación estratégica de Negocios y Desarrollo Sostenible.</p>
      </div>
    ),
    quiz: [
      { id: 1001, question: "Los hospitales públicos funcionan como islas independientes sin necesidad de coordinarse con la Atención Primaria.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Son nodos interdependientes de la red asistencial y dependen de la APS para referencias y contrarreferencias." },
      { id: 1002, question: "Las clínicas privadas enfrentan una competencia intensa por pacientes y talento médico.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. Operan en una lógica de mercado que exige diferenciación y fidelización." },
      { id: 1003, question: "La rigidez normativa y la fiscalización de Contraloría son características propias de las instituciones privadas.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Son características definitorias de las instituciones PÚBLICAS." }
    ]
  },
  {
    id: 'cap11',
    title: '11. Conclusiones y Resiliencia',
    description: 'Sostenibilidad, aprendizaje y el concepto de Resiliencia Hospitalaria.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073',
    glossary: [
        { term: "Resiliencia Hospitalaria", definition: "Capacidad de un establecimiento para absorber shocks, adaptarse a la demanda y transformarse para mejorar tras una crisis." },
        { term: "Absorción", definition: "Capacidad de resistir el impacto inicial de una emergencia manteniendo las funciones esenciales." },
        { term: "Adaptación", definition: "Capacidad de reorganizar recursos y procesos de forma flexible para responder a condiciones cambiantes." },
        { term: "Transformación", definition: "Capacidad de aprendizaje estructural que permite al sistema salir fortalecido después de una crisis." },
        { term: "Sostenibilidad", definition: "Mantención de la estrategia y sus resultados en el tiempo, equilibrando recursos y necesidades futuras." }
    ],
    fullContent: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900">11.1 Síntesis de elementos claves</h3>
        <p>La planificación estratégica en salud no es un lujo, es un imperativo ético y técnico para la supervivencia y relevancia de las instituciones. Requiere un liderazgo convencido, participación real de los equipos, datos de calidad para decidir y una metodología rigurosa de seguimiento. No es un evento aislado, es un proceso cultural continuo de adaptación, aprendizaje y mejora para servir mejor a la población y cumplir el propósito sanitario.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">11.2 Recomendaciones para la sostenibilidad en el tiempo</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mantener el Comité Estratégico activo y sesionando regularmente.</li>
          <li>Vincular indisolublemente el plan estratégico al presupuesto anual (si no hay financiamiento, no hay plan).</li>
          <li>Capacitar continuamente a los equipos directivos y jefaturas en gestión estratégica.</li>
          <li>Comunicar sistemáticamente los avances y logros a toda la organización para mantener el compromiso.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">11.3 Resiliencia hospitalaria en crisis</h3>
        <p>La pandemia de COVID-19 enseñó dolorosamente que los planes deben ser flexibles y robustos a la vez. La resiliencia (capacidad de absorber shocks, adaptarse y recuperarse) debe ser un eje transversal en la planificación moderna. Planificar para la incertidumbre, tener planes de contingencia y continuidad operativa probados. Un hospital resiliente es aquel que planifica rigurosamente, pero sabe adaptarse con agilidad cuando la realidad supera al plan.</p>
      </div>
    ),
    content: (
      <div className="font-sans text-slate-700 leading-relaxed space-y-6">
        <SectionTitle>11.1 Síntesis</SectionTitle>
        <QuoteBox text="La planificación estratégica no es un evento aislado, es un proceso cultural continuo de adaptación y aprendizaje." />
        <p>No es un lujo, es un imperativo ético y técnico. Requiere liderazgo convencido, participación real y datos de calidad.</p>

        <SectionTitle>11.2 Recomendaciones de Sostenibilidad</SectionTitle>
        <ul className="list-disc pl-6">
            <li>Mantener el Comité Estratégico activo.</li>
            <li>Vincular indisolublemente el plan al presupuesto anual.</li>
            <li>Capacitar continuamente a equipos directivos.</li>
            <li>Comunicar sistemáticamente avances.</li>
        </ul>

        <SectionTitle>11.3 Resiliencia Hospitalaria en Crisis</SectionTitle>
        <DefinitionBox term="Resiliencia Hospitalaria" def="Capacidad de absorber shocks (pandemias, desastres), adaptarse y recuperarse manteniendo funciones esenciales." />
        <p>La resiliencia tiene tres capacidades clave (Modelo OMS):</p>
        <ul className="list-none space-y-2 bg-white p-4 rounded border border-slate-200">
            <li>🛡️ <strong>Absorción:</strong> Resistir el impacto inicial.</li>
            <li>🔄 <strong>Adaptación:</strong> Reorganizar recursos flexiblemente (ej. convertir camas).</li>
            <li>🦋 <strong>Transformación:</strong> Aprender de la crisis para mejorar estructuralmente.</li>
        </ul>
      </div>
    ),
    quiz: [
      { id: 1101, question: "La resiliencia hospitalaria implica volver exactamente al mismo estado anterior después de una crisis.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Implica transformación y aprendizaje para ser mejor y más fuerte que antes (Build Back Better)." },
      { id: 1102, question: "Para asegurar la sostenibilidad, el plan estratégico debe estar desvinculado del presupuesto anual.", options: ["Verdadero", "Falso"], correctAnswer: 1, explanation: "Falso. Deben estar indisolublemente vinculados. Un plan sin presupuesto es solo un deseo." },
      { id: 1103, question: "La capacidad de adaptación se refiere a la habilidad de reorganizar recursos flexiblemente ante una emergencia.", options: ["Verdadero", "Falso"], correctAnswer: 0, explanation: "Verdadero. Es la capacidad de modificar procesos y estructuras temporalmente para responder a la demanda crítica." }
    ]
  }
];

export const KPI_DATABASE = [
  {
    text: "Porcentaje de ocupación de pabellones quirúrgicos",
    type: "Eficiencia",
    perspective: "Procesos",
    explanation: "Mide el uso eficiente de la infraestructura crítica (Procesos Internos)."
  },
  {
    text: "Tasa de satisfacción usuaria (Net Promoter Score)",
    type: "Calidad Percibida",
    perspective: "Usuarios",
    explanation: "Refleja la percepción directa del paciente sobre la atención recibida."
  },
  {
    text: "EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization)",
    type: "Rentabilidad",
    perspective: "Financiera",
    explanation: "Indicador clave de la salud financiera operativa de la institución."
  },
  {
    text: "Porcentaje de funcionarios capacitados en RCP avanzado",
    type: "Capital Humano",
    perspective: "Aprendizaje",
    explanation: "Evalúa el desarrollo de competencias críticas del personal."
  },
  {
    text: "Años de Vida Saludable Perdidos (AVISA) evitados",
    type: "Impacto Sanitario",
    perspective: "Valor Social",
    explanation: "Mide el impacto real en la salud de la población, el fin último en salud pública."
  },
  {
    text: "Tasa de Infecciones Asociadas a la Atención en Salud (IAAS)",
    type: "Seguridad",
    perspective: "Procesos",
    explanation: "Indicador crítico de seguridad y calidad de los procesos clínicos."
  },
  {
    text: "Tiempo de espera para primera consulta de especialidad",
    type: "Acceso",
    perspective: "Usuarios",
    explanation: "Mide la oportunidad de la atención desde la perspectiva del paciente."
  },
  {
    text: "Porcentaje de ejecución presupuestaria",
    type: "Gestión Recursos",
    perspective: "Financiera",
    explanation: "Mide la capacidad de ejecutar el gasto planificado (crítico en sector público)."
  },
  {
    text: "Clima laboral y tasa de ausentismo",
    type: "Organizacional",
    perspective: "Aprendizaje",
    explanation: "Refleja el bienestar y compromiso del equipo humano."
  },
  {
    text: "Cobertura de vacunación en población objetivo",
    type: "Salud Pública",
    perspective: "Valor Social",
    explanation: "Indicador de efectividad en la protección de la salud comunitaria."
  }
];
