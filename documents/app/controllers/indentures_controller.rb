class IndenturesController < ApplicationController
  before_action :set_indenture, only: %i[show update destroy]

  # GET /indentures
  def index
    @indentures = Indenture.all

    render json: @indentures
  end

  # GET /indentures/1
  def show
    render json: @indenture
  end

  # POST /indentures
  def create
    @indenture = Indenture.new(indenture_params)

    if @indenture.save
      render json: @indenture, status: :created, location: @indenture
    else
      render json: @indenture.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /indentures/1
  def update
    if @indenture.update(indenture_params)
      render json: @indenture
    else
      render json: @indenture.errors, status: :unprocessable_entity
    end
  end

  # DELETE /indentures/1
  def destroy
    @indenture.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_indenture
      @indenture = Indenture.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def indenture_params
      params.require(:indenture).permit(:title, :description, :file_url, :image_url)
    end
end
