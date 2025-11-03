// Componente Footer
export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <p className="text-sm">© 2023 viUit. Todos os direitos reservados.</p>
      <div className="flex space-x-4">
        <a href="/privacy" className="hover:underline">
          Política de Privacidade
        </a>
        <a href="/terms" className="hover:underline">
          Termos de Serviço
        </a>
      </div>
    </footer>
  );
}