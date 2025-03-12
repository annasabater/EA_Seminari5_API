// src/routes/subject_routes.ts
import express from "express";
import {
    createSubject,
    getAllSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject,
    getStudentBySubject
} from "../subject/subject_controller.js";

const router = express.Router();

/**
 * @openapi
 * /api/subjects:
 *   post:
 *     summary: Crea una nova assignatura
 *     description: Afegeix una nova assignatura a la base de dades.
 *     tags:
 *       - Assignatures
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               student:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Assignatura creada correctament
 */
router.post("/subjects", createSubject);

/**
 * @openapi
 * /api/subjects:
 *   get:
 *     summary: Recupera totes les assignatures
 *     description: Retorna una llista de totes les assignatures disponibles.
 *     tags:
 *       - Assignatures
 *     responses:
 *       200:
 *         description: Llista d'assignatures recuperada amb èxit
 */
router.get("/subjects", getAllSubjects);

/**
 * @openapi
 * /api/subjects/{id}:
 *   get:
 *     summary: Obté una assignatura concreta
 *     description: Retorna la informació d'una assignatura mitjançant el seu ID.
 *     tags:
 *       - Assignatures
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Assignatura trobada
 *       404:
 *         description: No s'ha trobat l'assignatura
 */
router.get("/subjects/:id", getSubjectById);

/**
 * @openapi
 * /api/subjects/{id}:
 *   put:
 *     summary: Modifica una assignatura
 *     description: Actualitza la informació d'una assignatura existent.
 *     tags:
 *       - Assignatures
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               teacher:
 *                 type: string
 *               student:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Assignatura actualitzada correctament
 *       404:
 *         description: No s'ha trobat l'assignatura
 */
router.put("/subjects/:id", updateSubject);

/**
 * @openapi
 * /api/subjects/{id}:
 *   delete:
 *     summary: Elimina una assignatura
 *     description: Suprimeix una assignatura de la base de dades a partir del seu ID.
 *     tags:
 *       - Assignatures
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Assignatura eliminada correctament
 *       404:
 *         description: No s'ha trobat l'assignatura
 */
router.delete("/subjects/:id", deleteSubject);

/**
 * @openapi
 * /api/subjects/{id}/students:
 *   get:
 *     summary: Consulta els alumnes d'una assignatura
 *     description: Retorna un llistat d'alumnes inscrits en una assignatura determinada.
 *     tags:
 *       - Assignatures
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Llista d'alumnes trobada
 *       404:
 *         description: No s'ha trobat l'assignatura
 */
router.get("/subjects/:id/subject", getStudentBySubject);

export default router;
