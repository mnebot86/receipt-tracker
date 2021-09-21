class ImagesController < ApplicationController
  before_action :set_image, only: [:show, :update, :destroy]

  # GET 
  def index
    @images = Images.all

    render json: @images
  end

  # GET
  def show
    render json: @image
  end

  # POST 
  def create
    @image = Image.new(image_params)

    if @image.save
      render json: @image, status: :created, location: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT
  def update
    if @image.update(image_params)
      render json: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @image.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_image
      @image = Image.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def image_params
      params.require(:image).permit(:receipt_id, :file)
    end
end
