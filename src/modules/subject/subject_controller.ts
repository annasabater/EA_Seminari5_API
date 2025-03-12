import { Request, Response } from "express";
import * as subjectService from "./subject_service.js";

export const createSubject = async (req: Request, res: Response) => {
    try {
        const subject = await subjectService.createSubject(req.body);
        res.status(201).json(subject); // Retorna l'objecte creat
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllSubjects = async (req: Request, res: Response) => {
    try {
        const subjects = await subjectService.getAllSubjects();
        res.status(200).json(subjects); // Retorna la llista d'assignatures
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getSubjectById = async (req: Request, res: Response) => {
    try {
        const subject = await subjectService.getSubjectById(req.params.id);
        if (!subject) {
            return res.status(404).json({ message: "Assignatura no trobada" });
        }
        res.status(200).json(subject);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateSubject = async (req: Request, res: Response) => {
    try {
        const updatedSubject = await subjectService.updateSubject(req.params.id, req.body);
        if (!updatedSubject) {
            return res.status(404).json({ message: "Assignatura no trobada" });
        }
        res.status(200).json({ message: "Assignatura actualitzada correctament" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteSubject = async (req: Request, res: Response) => {
    try {
        const deletedSubject = await subjectService.deleteSubject(req.params.id);
        if (!deletedSubject) {
            return res.status(404).json({ message: "Assignatura no trobada" });
        }
        res.status(200).json({ message: "Assignatura eliminada correctament" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getStudentBySubject = async (req: Request, res: Response) => {
    try {
        const subject = await subjectService.getStudentBySubject(req.params.id);
        if (!subject) {
            return res.status(404).json({ message: "Assignatura no trobada" });
        }
        res.status(200).json(subject.student); // Retorna la llista d'estudiants de l'assignatura
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};