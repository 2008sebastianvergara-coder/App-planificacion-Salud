import { GoogleGenerativeAI } from "@google/generative-ai";

// Mantenemos tu excelente prompt tal cual
const MANUAL_CONTEXT = `
[RESUMEN DEL MANUAL DE PLANIFICACIÓN ESTRATÉGICA PARA INSTITUCIONES DE SALUD - U. FINIS TERRAE 2025]
CAPÍTULO 1 & 10: DIFERENCIAS PÚBLICO VS PRIVADO
- Público: Mandato legal (garantizar derecho a la salud), rigidez presupuestaria (dependencia DIPRES), gobernanza compleja.
- Privado: Sostenibilidad financiera, autonomía de gestión, competencia de mercado.
CAPÍTULO 3: METODOLOGÍA GENERAL
- Ciclo: Diagnóstico -> Formulación -> Plan Operativo -> Implementación -> Evaluación.
CAPÍTULO 4: DIAGNÓSTICO ESTRATÉGICO
- Análisis Interno y Externo (PESTEL). FODA. Brecha Crítica. Análisis de Actores (Gardner).
CAPÍTULO 5: FORMULACIÓN ESTRATÉGICA
- Misión, Visión, Valores. Objetivos SMART. Priorización (Matriz Impacto/Factibilidad).
CAPÍTULO 6 & 8 & 9: PLAN OPERATIVO, KPIs Y BSC
- Plan Operativo (POE). BSC en Salud (5 perspectivas). KPIs (Proceso, Resultado).
CAPÍTULO 7: IMPLEMENTACIÓN
- Gobernanza, Liderazgo, Gestión del Cambio (Kotter), Resistencia.
`;

const SYSTEM_INSTRUCTION = `
Actúa como el "Director Médico Experto en Planificación Estratégica".
Usa el siguiente contexto del manual: ${MANUAL_CONTEXT}

TU OBJETIVO: Guiar a estudiantes universitarios a través de un aprendizaje socrático interactivo.
MODALIDADES:
1. DEFENSA DE TESIS: Critica objetivos SMART.
2. QUIZ DE CLASIFICACIÓN: Pregunta conceptos rápidos.
3. ASISTENTE DE DIAGNÓSTICO: Valida FODA y Brechas.
4. SIMULADOR PÚBLICO VS PRIVADO: Contextualiza restricciones.
5. RADAR DE STAKEHOLDERS: Matriz de Gardner.
6. TRIAJE DE PRIORIZACIÓN: Matriz Impacto/Factibilidad.
7. GESTIÓN DEL CAMBIO: Manejo de resistencia.

REGLAS: Cita el manual (ej: "Según el Cap. 6.2..."). No des la respuesta directa.
`;

// --- AQUÍ ESTABA EL ERROR, CORREGIDO ABAJO ---

export const sendMessageToTutor = async (history: {role: string, parts: {text: string}[]}[], message: string) => {
  try {
    // 1. Acceso correcto a la variable en VITE
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    
    if (!apiKey) {
      console.error("Falta la API Key. Revisa las variables de entorno en Vercel.");
      throw new Error("API Key no configurada");
    }

    // 2. Inicialización correcta del SDK oficial
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash", // Usamos el modelo estándar rápido
        systemInstruction: SYSTEM_INSTRUCTION 
    });

    // 3. Preparar el historial correctamente
    // Gemini espera "user" y "model", no "assistant"
    const chatHistory = history.map(h => ({
      role: h.role === 'assistant' ? 'model' : 'user', 
      parts: h.parts
    }));

    // 4. Iniciar el chat y enviar mensaje
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        temperature: 0.4,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();

  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Lo siento, hubo un error de conexión con el Tutor IA. Verifica la configuración.";
  }
};
