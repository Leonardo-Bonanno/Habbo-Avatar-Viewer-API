import { getFullProfile } from "../services/profile.service.js";

export async function getProfile(req, res) {
  try {
    const data = await getFullProfile(req.params.name);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar perfil" });
  }
}