class GraficaController < ApplicationController
  def index
  	@conteo = Libro.group(:categoria,:formato).count(:formato, :categoria)
  end
end
