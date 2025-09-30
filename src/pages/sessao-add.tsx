import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionContext } from '../hooks/use-sessions'; 
import { type StudySession } from '../types/study-session'; 

const INITIAL_FORM_STATE = {
    subject: '',
    minutes: 0,
    date: new Date().toISOString().split('T')[0], 
    note: '',
};

export default function AddSessionPage() {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const navigate = useNavigate();
    const { addSession } = useSessionContext();

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'number' ? Number(value) : value, 
        }));
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newSession: StudySession = {
            id: Date.now().toString(), 
            subject: formData.subject,
            minutes: formData.minutes,
            data: formData.date,
            note: formData.note || undefined, 
        };

        addSession(newSession);

        navigate('/');
    };

    return (
        <div className="max-w-xl mx-auto p-4 bg-white shadow-xl rounded-lg">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">Registrar Nova Sessão</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto da Sessão</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Ex: Estudo de React"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    />
                </div>

                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label htmlFor="minutes" className="block text-sm font-medium text-gray-700 mb-1">Duração (Minutos)</label>
                        <input
                            type="number"
                            name="minutes"
                            id="minutes"
                            value={formData.minutes}
                            onChange={handleChange}
                            required
                            min="1"
                            placeholder="45"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        />
                    </div>
                    
                    <div className="flex-1">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Data do Estudo</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">Notas Adicionais (Opcional)</label>
                    <textarea
                        name="note"
                        id="note"
                        value={formData.note}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Quais foram os principais desafios ou aprendizados?"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 resize-none"
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.01]"
                    >
                        Salvar Sessão de Estudo
                    </button>
                </div>
            </form>
        </div>
    );
}