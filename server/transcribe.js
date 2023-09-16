import { pipeline } from "@xenova/transformers"

export async function transcribe(audio) {
  try {
    console.log("Generating trascription...")

    const transcribe = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small"
    )

    const transctiption = await transcribe(audio, {
      chunk_length_s: 30,
      stride_length_s: 5,
      language: "portuguese",
      task: "transcribe",
    })

    console.log("Generated transcribe with success...")

    return transctiption?.text
  } catch (error) {
    throw new Error(error)
  }
}
