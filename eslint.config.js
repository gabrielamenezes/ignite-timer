import config from '@rocketseat/eslint-config/react.mjs'
export default {
  // Estende a configuração importada
  ...config,
  
  // Adiciona ou sobrescreve regras
  rules: {
    // Copia as regras existentes do config importado, se houver
    ...config.rules,  
    
    // Adiciona ou sobrescreve regras específicas
    "@typescript-eslint/no-empty-object-type": "error",
  }
}